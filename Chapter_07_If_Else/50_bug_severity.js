// Question 3 — Bug Severity Classifier

// Problem: Given a bug's impact score (1–10), classify the severity.

// 9–10 → Critical (block release)
// 7–8 → High
// 4–6 → Medium
// 1–3 → Low
// Anything else → Invalid score

let impactScore = 1;

if (impactScore >= 1 && impactScore <= 3) {
    console.log("Low Severity");
} else if (impactScore >= 4 && impactScore <= 6) {
    console.log("Medium Severity");
} else if (impactScore >= 7 && impactScore <= 8) {
    console.log("High Severity");
} else if (impactScore >= 9 && impactScore <= 10) {
    console.log("Critical Severity");
} else {
    console.log("Invalid Score")
}