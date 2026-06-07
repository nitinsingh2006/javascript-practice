let pin = 123;
let otp = 5678;
let fingerprint = true;

let true_pin = 123;
let true_otp = 5678;
let true_fingerprint = true;

if (pin === true_pin &&
    otp === true_otp &&
    fingerprint === true_fingerprint) {

    console.log("Access Granted");

} else if (pin !== true_pin) {

    console.log("PIN Mismatch");

} else if (otp !== true_otp) {

    console.log("OTP Mismatch");

} else {

    console.log("Fingerprint Mismatch");
}