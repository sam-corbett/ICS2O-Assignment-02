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
  const streetNumber = parseInt(document.getElementById("street-number").value)

  // output
  document.getElementById("address").innerHTML =
    "If you typed the number " +
    streetNumber +
    ". You typed the correct area of the circle!"
}
