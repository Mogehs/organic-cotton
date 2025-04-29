import Stripe from "stripe";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {
    const userId = req.params.id;
    const { items, shippingAddress } = req.body;

    const totalPrice = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // 1. Create the order first
    const newOrder = await Order.create({
      user: userId,
      items: items.map(({ productId, quantity }) => ({
        product: productId,
        quantity,
      })),
      totalPrice,
      shippingAddress,
      paymentMethod: "Stripe",
    });

    // 2. Format line items
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

    // 3. Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/productorders`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
      metadata: {
        userId,
        orderId: newOrder._id.toString(),
      },
      payment_intent_data: {
        description: `Order for ${items.length} item(s) by User ${userId}`,
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("Checkout Session Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};
