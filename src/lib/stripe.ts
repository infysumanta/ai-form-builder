import Stripe from "stripe";
import { loadStripe, Stripe as StripeClient } from "@stripe/stripe-js";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || " ", {
  apiVersion: "2023-10-16",
  typescript: true,
});

let stripeClientPromises: Promise<StripeClient | null> | null = null;

export const getStipeClient = async () => {
  if (!stripeClientPromises) {
    stripeClientPromises = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || " ",
    );
  }
  return stripeClientPromises;
};
