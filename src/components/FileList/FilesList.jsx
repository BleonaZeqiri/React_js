import React from "react";
import Card from "../Card/Card";
import shipa from "../../assets/images/shiba.png";
import dog from "../../assets/images/dog.png";

import "./FileList.css";
const file_list = [
  {
    document_number: "3.3.0",
    date: "(14/05/2018)",
    type: "New",
    img: dog,
    name: "Kevin Jeo",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus",
  },
  {
    document_number: "3.3.0",
    date: "(14/05/2018)",
    type: "Fix",
    img: dog,
    name: "Kevin Jeo",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus",
  },
  {
    document_number: "3.3.0",
    date: "(14/05/2018)",
    type: "Improvement",
    img: shipa,
    name: "Kevin Jeo",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minusLorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus ",
  },
  {
    document_number: "3.3.0",
    date: "(14/05/2018)",
    type: "New",
    img: dog,
    name: "Kevin Jeo",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus",
  },
  {
    document_number: "3.3.0",
    date: "(14/05/2018)",
    type: "Fix",
    img: dog,
    name: "Kevin Jeo",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus",
  },
  {
    document_number: "3.3.0",
    date: "(14/05/2018)",
    type: "Improvement",
    img: shipa,
    name: "Kevin Jeo",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minusLorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus ",
  },
  {
    document_number: "3.3.0",
    date: "(14/05/2018)",
    type: "New",
    img: dog,
    name: "Kevin Jeo",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus",
  },
  {
    document_number: "3.3.0",
    date: "(14/05/2018)",
    type: "Fix",
    img: dog,
    name: "Kevin Jeo",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus",
  },
  {
    document_number: "3.3.0",
    date: "(14/05/2018)",
    type: "Improvement",
    img: shipa,
    name: "Kevin Jeo",
    desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minusLorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa minus ",
  },
];
export const FileList = () => {
  return (
    <section className="File__list">
      {file_list?.map((file_list, index) => {
        return <Card item={file_list} key={`file_list -${index}`} />;
      })}
    </section>
  );
};
