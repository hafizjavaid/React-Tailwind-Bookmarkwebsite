import React from "react";
import Title from "../common/Title";
import { features } from "./data";
import Feature from "./Feature";
const Features = () => {
  return (
    <section className="bg-bookmark-white py-20 mt-20 lg:mt-60">
      <Title
        title="Features"
        subtitle=" Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between
            your devices so you can access them on the go."
      ></Title>
      {features.map((feature, i) => {
        return <Feature key={i} feature={feature}></Feature>;
      })}
    </section>
  );
};

export default Features;
