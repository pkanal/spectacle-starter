import React from "react";
import CodeSlide from "spectacle-code-slide";
import example from "./code/example";

export const codeSectionSlides = [
  <CodeSlide
    lang="javascript"
    code={example}
    ranges={[
      { loc: [0, 4], title: "look at this this code!" },
      { loc: [0, 2], title: "now look here!" },
      { loc: [2, 4], title: "now here!" }
    ]}
    bgColor="#122b45"
    color="#ffffff"
    transition={[]}
    showLineNumbers={false}
  />
];
