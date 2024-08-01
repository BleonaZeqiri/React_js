import React from "react";
import { TabSection } from "../components/TabSection/TabSection";
import FaqItem from "../components/FaqItem/FaqItem";
import Faq from "../components/Faq/Faq";

import "../components/FaqItem/FaqItem.css";
import "../components/Faq/Faq.css";

export const SecondTask = () => {
  return (
    <div>
      <TabSection />
      <Faq />
      <FaqItem />
    </div>
  );
};
