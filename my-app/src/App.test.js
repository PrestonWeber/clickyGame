import React from "react";
import App from "./App";
import ReactDOM from "react-dom";
const expect = require("chai").expect;

const shuffle = new App();

it("shuffles", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < arr.length; i++) {
    expect(shuffle.shuffleArray(arr).to.equal(arr[i]));
  }
});
