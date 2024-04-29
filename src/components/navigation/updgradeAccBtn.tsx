import React from "react";
import { getUserForms } from "@/app/actions/getUserForms";
import { MAX_FREE_FROMS } from "@/lib/utils";
import ProgressBar from "../progressBar";
import SubscribeBtn from "@/app/subscription/SubscribeBtn";
import { auth } from "@/lib/auth";
import { getUserSubscription } from "@/app/actions/userSubscriptions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
type Props = {};

const UpdgradeAccBtn = async (props: Props) => {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return null;
  }
  const subscription = await getUserSubscription({ userId });
  if (subscription) {
    return null;
  }
  const forms = await getUserForms();
  const formCount = forms.length;
  const percent = (formCount / MAX_FREE_FROMS) * 100;

  return (
    <Card x-chunk="dashboard-02-chunk-0">
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle>Upgrade to Pro</CardTitle>
        <ProgressBar value={percent} />
        <CardDescription>
          {formCount} out of {MAX_FREE_FROMS} forms generated.
          <br />
          <hr
            style={{
              margin: "0.5rem 0",
              border: "0",
              borderTop: "1px solid #e5e7eb",
            }}
          />
          <span className="text-sm text-muted-foreground">
            Upgrade to generate unlimited forms.
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SubscribeBtn price="price_1Oeu01C0XQCoR9vaO7GKAKRJ" userId={userId} />
      </CardContent>
    </Card>
  );
};

export default UpdgradeAccBtn;
