import React, { useState } from "react";
import Accordian from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Header from './components/Header';
import Route from "./components/Route";

const items = [
  {
    title: "What is React?",
    content: "is React - kwdw mlw;l mlm;lm knn nnkkn",
  },
  {
    title: "Why use React?",
    content: "use React - kwdw mlw;l mlm;lm knn nnkkn",
  },
  {
    title: "How do you use React?",
    content: "how react - kwdw mlw;l mlm;lm knn nnkkn",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
