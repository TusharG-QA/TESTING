// Problem: Given the percentage of test cases passed in a CI build, report build health.
// 100% → Green Build
// 90–99% → Stable (investigate failures)
// 70–89% → Unstable
// Below 70% → Broken Build (block deployment)


let InputPercentage = 10;

if (InputPercentage === 100) {
    console.log("Green Build");
} else if (InputPercentage >= 90 && InputPercentage <= 99) {
    console.log("Stable");
} else if (InputPercentage >= 70 && InputPercentage <= 89) {
    console.log("Unstable");
} else if (InputPercentage < 70) {
    console.log("Broken Build");
}