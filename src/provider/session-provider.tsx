import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SessionProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
