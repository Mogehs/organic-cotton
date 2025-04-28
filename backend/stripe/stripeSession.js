import Stripe from "stripe";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js"; // Assuming you have a Cart model

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const userId = req.params.id; // Get the userId from the request params
    const { items, shippingAddress } = req.body;

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productName || "Product",
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // Create Stripe session with metadata containing the userId
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/productorders`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
      metadata: {
        userId: userId, // Add userId in metadata
      },
    });

    // Create a new order in the database
    const newOrder = await Order.create({
      user: userId,
      items: items.map(({ productId, quantity }) => ({
        product: productId,
        quantity,
      })),
      totalPrice: items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
      shippingAddress: shippingAddress?.address,
      paymentMethod: "Stripe",
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
