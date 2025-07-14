const ages= [12, 13, 14, 16, 17, 18, 20, 22, 23, 24, 25];
const noumberofPeople= ages.length;
for(let i= 0; i < noumberofPeople; i++){
    if (ages[i] % 2== 0) {
      console.log(ages[i]);
  }
}

const num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,101];

let max = num[0];

for (let i = 1; i < num.length; i++) {
    if (num[i] > max) {
        max = num[i];
    }
}

console.log("Largest number is:", max);
