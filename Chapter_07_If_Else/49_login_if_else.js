// expected = "Login Successful"
// actual   = "Login Successful"
// Output: ✅ Test Passed

// expected = "Login Successful"
// actual   = "Invalid Credentials"
// Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials



let expected = "Login Successful";
let actual = "Login Successful";

if (expected === actual) {
    console.log("✅ Test Passed");
} else {
    console.log("❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials");
}
