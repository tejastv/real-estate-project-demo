"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/site";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {faqs.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div key={faq.question} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-6 py-7 text-left"
              aria-expanded={open}
            >
              <span className="flex items-start gap-5">
                <span className="mt-1 text-[0.62rem] tracking-[0.15em] text-olive">0{index + 1}</span>
                <span className="font-display text-2xl text-charcoal md:text-3xl">{faq.question}</span>
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center border border-line text-olive">{open ? <Minus size={16} /> : <Plus size={16} />}</span>
            </button>
            <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-7 pl-9 pr-12 text-sm leading-7 text-olive md:pl-12">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
