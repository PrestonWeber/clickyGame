import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
import expect from "chai"



const shuffle = new App()

it("shuffles", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(shuffle.shuffleArray(arr).to.equal(arr));
});
