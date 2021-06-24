import React from "react";
import Title from "../common/Title";
import { Faqss } from "./data";
import Faq from "./Faq";
const Faqs = () => {
  return (
    <section className="bg-bookmark-white py-20">
      <div className="container">
        <Title
          title="Frequently Asked Questions"
          subtitle=" Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
        ></Title>
        <div className="flex flex-col sm:w-3/4 lg:w-5/12 mt-12 mx-auto">
          {Faqss.map((faq, i) => {
            return <Faq key={i} faq={faq}></Faq>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
