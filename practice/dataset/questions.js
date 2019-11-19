const fs = require("fs");

let data = fs.readFileSync("2018entries.json", "utf8"); // Store fs.readFileSync into a variable/let otherwise it will run as a string.

data = JSON.parse(data); // convert the variable/let data into JSON file

// Question 1
console.log("What month had the most evictions?");



























class EvictionNotice {
    constructor(month, zip, ellisAct, condoConversion){
        this.month = month;
        this.zip = zip;
        this.ellisAct = ellisAct;
        this.condoConversion = condoConversion;
    }
}

console.log(stringToObject(data.data[1000])); // data.data = first is the data file, second is the key inside the data file.

function stringToObject(string){
    // Split up the entry string into its individual parts.
    let entryArray = string.split(",");
    // Split up the Date string into multiple parts.
    let entryDate = entryArray[5].split("/");

    // Create a new object and provide the proper values.
    let evictionObject = new EvictionNotice( entryDate[0], entryArray[4], entryArray[17], entryArray[18]);
    // Return new object to call location.
    return evictionObject;
}
