import React from "react";

const ThemeContext = React.createContext("blue");

const { Provider: ThemeProvider, Consumer: ThemeConsumer } = ThemeContext;

export { ThemeConsumer, ThemeProvider, ThemeContext };
