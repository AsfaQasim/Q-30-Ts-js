var userNames = ["Ali", "Faraz", "Admin", "Tariq", "Noman", "Furqan"];
for (var i = 0; i < userNames.length; i++) {
    if (userNames[i] == "Admin") {
        console.log("\n Hello ".concat(userNames[i], " would you like to see a status report?\n"));
    }
    else {
        console.log("Hello ".concat(userNames[i], " thank you for logging in again! "));
    }
}
