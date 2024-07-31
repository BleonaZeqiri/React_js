import React from "react";
import { TabSection } from "../components/TabSection/TabSection";
import Faq from "../components/Faq/Faq";
import FaqItem from "../components/FaqItem/FaqItem";
import "../components/Faq/Faq.css";
import "../components/FaqItem/FaqItem.css";

export const SecondTask = () => {
  return (
    <div>
      <TabSection />
      <Faq />
      <FaqItem />
    </div>
  );
};
