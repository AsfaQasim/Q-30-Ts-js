let userNames : string[] = ["Ali","Faraz","Admin","Tariq","Noman","Furqan"];

for (let i =0; i< userNames.length; i++){
    if(userNames[i] == "Admin"){
        console.log(`\n Hello ${userNames[i]} would you like to see a status report?\n`);
    }else{
        console.log(`Hello ${userNames[i]} thank you for logging in again! `)
    }

}