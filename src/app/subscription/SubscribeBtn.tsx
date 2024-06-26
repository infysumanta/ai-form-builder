"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { getStipeClient } from "@/lib/stripe";
import { Button } from "@/components/ui/button";

type Props = {
  userId?: string;
  price: string;
};

const SubscribeBtn = ({ userId, price }: Props) => {
  const router = useRouter();

  const handleCheckout = async (price: string) => {
    if (!userId) {
      router.push("/login");
    }

    try {
      const { sessionId } = await fetch("/api/stripe/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price }),
      }).then((res) => res.json());

      console.log("sessionId:", sessionId);
      const stripe = await getStipeClient();
      stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Button size={"lg"} onClick={() => handleCheckout(price)}>
      Upgrade your plan
    </Button>
  );
};

export default SubscribeBtn;
