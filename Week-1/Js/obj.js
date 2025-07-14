const allUsers= [{
    firstname: "Harkirat",
    gender:"male"
}, {
    firstname: "Raman",
    gender: "male"
}, {
    firstname: "Tanya",
    gender: "female"
}, {
    firstname: "Aman",
    gender: "male"
}, {
    firstname: "Ramyaa",
    gender: "female"
}, {
    firstname: "arya",
    gender: "female"
}, {
    firstname: "Rachit",
    gender: "male"
}, {
    firstname: "naina",
    gender: "female"
},]
for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].gender == "male"){
        console.log(allUsers[i].firstname);
    }
}
     