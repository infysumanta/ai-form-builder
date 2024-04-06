import React from "react";
import Image from "next/image";
import FormGenerator from "../form-generator";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      <section
        className="flex flex-col items-center justify-center space-y-4 pt-4 sm:pt-24 w-full bg-[url('/grid.svg')]"
        id="hero"
      >
        <h1 className="text-4xl font-bold text-center tracking-tighter sm:text-5xl md:text-6xl leading-6">
          Create your forms <br></br>in seconds not hours
        </h1>
        <p className="max-w-[600px] mt-4 text-center text-gray-500 md:textl-xl">
          Generate, publish and share your form right away with AI.
        </p>
        <FormGenerator />
        <div className="w-full bg-gradient-to-b from-transparent to-white h-24"></div>
      </section>
    </div>
  );
};

export default LandingPage;
