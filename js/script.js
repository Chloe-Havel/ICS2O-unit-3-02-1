// Copyright (c) 2020 Chloe Havel All rights reserved
//
// Created by: Chloe Havel
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit-3-02-1/sw.js", {
    scope: "/ICS2O-unit-3-02-1/",
  })
}

/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate() {
  // input
  const length = parseInt(document.getElementById("v-length-of-pyramid").value)
  const width = parseInt(document.getElementById("v-width-of-pyramid").value)
  const height = parseInt(document.getElementById("-height-of-pyramid").value)
  // process
  const pyramid = length * width * height

  // output
  document.getElementById("volume").innerHTML = "volume is: " + pyramid + " mm³"
}
