let status = 404;

if (status < 200) {
    console.log("Informational");
} else if (status >= 200 && status < 300) {
    console.log("Success");
} else if (status >= 300 && status < 400) {
    console.log("Redirectional");
} else if (status >= 400 && status < 500) {
    console.log("client error");
} else if (status >= 500) {
    console.log("Server Error");
}