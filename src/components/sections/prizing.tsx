"use client";
import React, { useState } from "react";
import { Loader, Check, CheckCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { productPrices } from "@/config/site";

const toHumanPrice = (price: any, decimals = 2) => {
  return (price / 100).toFixed(decimals);
};

const PricingSection = () => {
  const [interval, setInterval] = useState("month");
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");

  const onSubscribeClick = async (priceId: string) => {
    setActiveIndex(priceId);
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <section id="pricing">
      <div className="mx-auto flex md:max-w-5xl max-w-full flex-col gap-8 px-4 py-14 md:px-8">
        {/*//- Heading  */}
        <div className="mx-auto max-w-5xl text-center">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
            Pricing
          </h4>
          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Simple <span className="theme-gradient">pricing</span> for everyone.
          </h2>
          <p className="hidden md:inline mt-4 text-xl leading-8 text-black/80 dark:text-white/70">
            Choose an <strong>affordable plan</strong> that's packed with the
            best features for engaging your audience, creating customer loyalty,
            and driving sales.
          </p>
        </div>

        {/*//- Toggle  */}
        <div className="mt-6 flex w-full items-center justify-center space-x-2">
          <Switch
            checked={interval === "year"}
            onCheckedChange={(checked) =>
              setInterval(checked ? "year" : "month")
            }
            id="interval"
          />
          <span>Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            2 MONTHS FREE ✨
          </span>
        </div>

        <div className="flex w-full flex-wrap justify-center gap-4 ">
          {productPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                "flex md:w-[40%] max-w-[95%] flex-col gap-8 rounded-2xl border p-4 ",
                price.isMostPopular ? "border-2 border-main1 " : "",
                "relative group "
              )}
            >
              <div className="flex items-center flex-wrap">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {price.name}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                    {price.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-1  ">
                <span className="text-4xl font-bold text-black dark:text-white">
                  ₹
                  {toHumanPrice(
                    interval === "month"
                      ? price.monthlyPrice
                      : price.yearlyPrice,
                    0
                  )}
                  <span className="text-xs"> / {interval}</span>
                </span>
              </div>

              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                )}
                disabled={isLoading}
                onClick={() => onSubscribeClick(price.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {isLoading && activeIndex === price.id ? (
                  <>
                    <Loader className="mr-2 size-4 animate-spin" />
                    Subscribing
                  </>
                ) : (
                  price.cta
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />

              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                    >
                      {/* <Check className="size-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" /> */}
                      <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
