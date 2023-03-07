const score = 100;
const additionalScrore = "200";
let finalScore;

// if (additionalScrore == 200) {
//   finalScore = score + additionalScrore;
// }

if (Number(additionalScrore) === 200) {
  finalScore = score + Number(additionalScrore);
}

console.log(finalScore);
