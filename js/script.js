// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Oct 2022
// This file contains the JS functions for index.html

/**
 * This function gets users Street Number and Name to shows it back to user.
 */
function enterClicked() {
  // input
  const radius = parseInt(document.getElementById("radius-of-circle").value)

  //process
  const area = 3.14159265359 * radius ** 2

    // output
    document.getElementById("area-of-circle").innerHTML =
    "The Area Is Around " + area.toFixed(2)
}
