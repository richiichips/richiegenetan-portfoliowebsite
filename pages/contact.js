import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Contact from "../components/Contact";
import ScrollToTop from "react-scroll-to-top";

export default function contact() {
  return (
    <ContainerBlock  title="Contact - Richie Gene Tan">
      <ScrollToTop smooth width="40"/>
      <Contact />
    </ContainerBlock>
  );
}
