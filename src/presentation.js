import React from "react";
import { Deck } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import slide sets
import { introSlides } from "./slides/intro";
import { codeSectionSlides } from "./slides/code-section";

// Require CSS
require("normalize.css");
require("./prism.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        {introSlides}
        {codeSectionSlides}
      </Deck>
    );
  }
}
