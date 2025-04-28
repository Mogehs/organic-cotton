import Order from "../models/Order.js";
import Cart from "../models/Cart.js"; // Assuming you have a Cart model
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.log(err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const userId = session.metadata.userId; // Access userId from metadata

    // Find and update the order
    const order = await Order.findOne({
      totalPrice: session.amount_total / 100,
    });

    if (order) {
      order.isPaid = true;
      order.paidAt = new Date();
      order.paymentResult = {
        id: session.id,
        status: session.payment_status,
        update_time: new Date().toISOString(),
        email_address: session.customer_email,
      };
      await order.save();

      await Cart.findOneAndDelete({ userId: userId });
    }
  }

  res.json({ received: true });
};
