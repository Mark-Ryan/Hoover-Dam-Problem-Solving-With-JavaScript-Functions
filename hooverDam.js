// Problem Solving with Functions Example

// At the Hoover Dam, the technicians have decided they want more control of which generators are on and off.
// This script adjusts the total megawatts generated upon the switch-on or switch-off of a single, chosen generator.

// Build a function named 'changePowerTotal' that takes in four parameters.

function changePowerTotal(totalPower, genID, genStatus, genPower)

// If the current generator is set to "on", then add to the total power generated.

 {
  if (genStatus == "on") {
    totalPower += genPower;
    alert("Generator #" + genID + " is now " + genStatus + ", adding " + genPower + " MW, for a total of " + totalPower + " MW!");

// If the current generator is set to "off", then remove from the total power generated.

  } else if (genStatus == "off") {
    totalPower -= genPower;
    alert("Generator #" + genID + " is now " + genStatus + ", removing " + genPower + " MW, for a total of " + totalPower + " MW!");
  }

// Return the total power generated and alert the technician.

  return totalPower;
}