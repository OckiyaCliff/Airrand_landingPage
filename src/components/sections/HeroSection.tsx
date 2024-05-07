import React from "react";
import MainButton from "../common/MainButton";
import { Separator } from "@radix-ui/react-separator";

function HeroSection() {
  return (
    <section className="flex justify-between flex-col md:flex-row gap-4 items-center">
      <div>
        <p className="font-[850] md:leading-[5.0625rem] text-2xl md:text-[4.375rem] text-darkBlue">
        Connecting Your Tasks with Runners.
        </p>
        <p className="text-[1.375rem] font-[500]">
        Effortlessly manage your errands while empowering local task runners.
        </p>
        <div className="flex gap-[1.75rem] items-center mt-[3rem]">
          <MainButton text="Get Started" classes="shadow-none w-[10.125rem]" />
          
        </div>
      </div>
      <div>
        <img
          src="/images/happy_guy.png"
          alt="guy with phone surrounded by action icons"
          className="rounded-full "
        />
      </div>
    </section>
  );
}

export default HeroSection;
