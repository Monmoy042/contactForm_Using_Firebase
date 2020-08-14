// Firebase Setup
var firebaseConfig = {
  apiKey: "AIzaSyDrGN9oCLZeE5oWQyuQ30if81p0gZeWaa8",
  authDomain: "contactform-f18f6.firebaseapp.com",
  databaseURL: "https://contactform-f18f6.firebaseio.com",
  projectId: "contactform-f18f6",
  storageBucket: "contactform-f18f6.appspot.com",
  messagingSenderId: "616028759416",
  appId: "1:616028759416:web:2bf0cc7ef815b82230d48d",
  measurementId: "G-GE0V2PEFHZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Reference Messages Collection
var messagesReference = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit the Form
function submitForm(event) {
  event.preventDefault();

  // Get All the input values
  var name = inputValue("name");
  var company = inputValue("company");
  var email = inputValue("email");
  var phone = inputValue("phone");
  var message = inputValue("message");
  // console.log(name,company,phone,email,message);

  // Calling Save message Function
  saveMessage(name, company, email, phone, message);

  // Alert message
  document.querySelector(".alert").style.display = "block";
  // Hide Alert after 4 Sec
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 4000);

  //   Reset the form values
  document.getElementById("contactForm").reset();
}

// Function for getting form values
function inputValue(id) {
  return document.getElementById(id).value;
}

// Save the messages to the firebase
function saveMessage(name, company, email, phone, message) {
  var newMessageRef = messagesReference.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message,
  });
}
