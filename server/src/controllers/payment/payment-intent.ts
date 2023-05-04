import { Request, Response } from "express";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2022-11-15",
});

const createPaymentIntent = async (req: Request, res: Response) => {
  const { amount, name, email } = req.body;

  try {
    const customer = await stripe.customers.create({ name, email });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      customer: customer.id,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
export default createPaymentIntent;
