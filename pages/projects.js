import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";
import ScrollToTop from "react-scroll-to-top";

export default function projects() {
  return (
    <ContainerBlock title="Projects - Richie Gene Tan">
      <ScrollToTop smooth width="40"/>
      <Projects />
    </ContainerBlock>
  );
}
