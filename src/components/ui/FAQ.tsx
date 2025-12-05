"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center uppercase underline decoration-primary decoration-3">
        Foire aux questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg bg-background shadow-sm transition-all hover:bg-primary/20 duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 font-bold flex justify-between items-center cursor-pointer"
            >
              <span>{faq.question}</span>
                <span
                className={`text-xl text-primary transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                >
                <ChevronDown />
                </span>
            </button>
            <div
              className={`px-6 text-muted-foreground transition-all duration-500 overflow-hidden ${
              openIndex === index
                ? "pb-4 opacity-100"
                : "max-h-0 pb-0 opacity-0"
              }`}
              style={{
              transitionProperty: "max-height, opacity, padding-bottom",
              maxHeight: openIndex === index ? "500px" : "0",
              }}
              aria-hidden={openIndex !== index}
            >
              <div className="transition-transform duration-500" style={{
              transform: openIndex === index ? "translateY(0)" : "translateY(-10px)",
              }}>
              {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
