import React from "react";
import Tabs from "../../components/Tabs/Tabs.jsx";
import Tab from "../../components/Tabs/Tab";
const tabs = [
  {
    aKey: "Domains",
    tabTitle: "Domains",
    cards: [
      {
        cardTitle: ".COM",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".AI",
        price: "$7.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".Net",
        price: "$7.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".CO",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".ORG",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".COM",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".AI",
        price: "$7.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".Net",
        price: "$7.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".CO",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".ORG",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
    ],
  },
  {
    aKey: "Web Hosting",
    tabTitle: "Web Hosting",
    cards: [
      {
        cardTitle: ".CO.UK",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
    ],
  },
  {
    aKey: "Dedicated Servers",
    tabTitle: "Dedicated Servers",
    cards: [
      {
        cardTitle: ".UK",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".COM",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".CO",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
    ],
  },
  {
    aKey: "Virtual Cloud Servers",
    tabTitle: "Virtual Cloud Servers",
    cards: [
      {
        cardTitle: ".COM",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".UK",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
    ],
  },
  {
    aKey: "WordPress Hosting",
    tabTitle: "WordPress Hosting",
    cards: [
      {
        cardTitle: ".CO",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".HEALTH",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".AI",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
    ],
  },
  {
    aKey: "Email Hosting",
    tabTitle: "Email Hosting",
    cards: [
      {
        cardTitle: ".NET",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".CO",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".COM",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
    ],
  },
  {
    aKey: "Vps Hosting Servers",
    tabTitle: "Vps Hosting Servers",
    cards: [
      {
        cardTitle: ".UK",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".CO",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".COM",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".NET",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
    ],
  },
  {
    aKey: "Free Hosting",
    tabTitle: "Free Hosting",
    cards: [
      {
        cardTitle: ".COM",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },

      {
        cardTitle: ".COM",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".AI",
        price: "$7.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".Net",
        price: "$7.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".CO",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".ORG",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".COM",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".AI",
        price: "$7.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".Net",
        price: "$7.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".CO",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".ORG",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
      {
        cardTitle: ".SEA",
        price: "$5.99/yr",
        content: "instead of $10.99yr",
      },
    ],
  },
];
export const TabSection = () => {
  return (
    <div className="second-task">
      <Tabs activeKey="Domains">
        {tabs.map((item) => (
          <Tab
            aKey={item.aKey}
            tabTitle={item.tabTitle}
            cards={item.cards}
            key={item.aKey}
          />
        ))}
      </Tabs>
    </div>
  );
};
