import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Experience from "../components/Experience";
import ScrollToTop from "react-scroll-to-top";

export default function experience() {
  return (
    <ContainerBlock title="Experience - Richie Gene Tan">
      <ScrollToTop smooth width="40"/>
      <Experience />
    </ContainerBlock>
  );
}
