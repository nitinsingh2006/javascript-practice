let username = "admin";
let password = "admin123";

if (username === "admin" && password === "admin123") {
    console.log("Login Successful");
}
else if (username !== "admin" && password !== "admin123") {
    console.log("Wrong Username and Password");
}
else if (username !== "admin") {
    console.log("Wrong Username");
}
else {
    console.log("Wrong Password");
}