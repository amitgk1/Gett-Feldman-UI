import React from 'react';
import './App.css';
import Layout from "./components/layout/Layout";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";

function App() {
  return (
      <ThemeProvider theme={theme}>
      <Layout/>
      </ThemeProvider>
  );
}

export default App;
