import {
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
import { database, auth } from "../bootsrap_portfolio/js/dashboard/firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", async () => {
  let countries = [];
  const countrySelect = document.getElementById("country");

  const response = await fetch("https://restcountries.com/v3.1/all");
  const jsonData = await response.json();
  console.log(jsonData);

  for (const value of jsonData) {
    let country = value.name.common;
    countries.push(country);
  }

  // Sort in alphabetical order
  countries.sort();

  countries.forEach((country) => {
    var option = document.createElement("option");
    option.value = country;
    option.text = country;

    countrySelect.appendChild(option);
  });
});

document.getElementById("btn").addEventListener("click", function () {
  console.log("LETS START FROM HERE");

  const countrySelect = document.getElementById("country");
  const accountSelect = document.getElementById("acct-type");
  const registerEmail = document.getElementById("eemail").value;
  const registerPassword = document.getElementById("lpassword").value;
  const registerName = document.getElementById("fname").value;
  const phone = document.getElementById("phone").value;
  const type = document.getElementById("type").value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      // const user = userCredential.user;
      const user = auth.currentUser;

      sendEmailVerification(user).then(() => {
        window.alert(
          "An email verification link has been sent to your email. Please verify your email before you proceed."
        );

        // Creates a collection for each user using an id unique to them in the firebase realtime database as they register using firebase auth.
        set(ref(database, "users2/" + user.uid), {
          name: registerName,
          email: registerEmail,
          phone_number: phone,
          password: registerPassword,
          country: countrySelect.value,
          account_type: accountSelect.value,
          type: type,
          balance: 0,
          profit: 0,
          signal: "",
        })
          .then(() => {
            // Immediately sets a local storage of the id of the user. This is to enables the dashboard retrieve the details of a particular user using their id that we can now get from local storage.
            window.localStorage.setItem("id", user.uid);

            // The user is navigated to the dashboard once the collection in the database has been created.
            // window.location.assign("../bootsrap_portfolio/index-2.html");
            setTimeout(() => {
              window.location.assign("index.html");
            }, 2000);
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
        alert(
          "This email address is already in use! Please use another email address."
        );
      }
    });
});

document.getElementById("btn1").addEventListener("click", function () {
  const registerEmail = document.getElementById("email").value;
  const registerPassword = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
      const userCred = userCredential.user;
      const user = auth.currentUser;

      if (userCred.emailVerified) {
        window.localStorage.setItem("id", user.uid);
        window.location.assign("../bootsrap_portfolio/index-2.html");
      } else {
        window.alert("Please verify your email before you proceed.");
      }

      // Immediately sets a local storage of the id of the user. This is to enable the dashboard retrieve the details of a particular user using their id that we can now get from local storage.
      // window.localStorage.setItem("id", user.uid);

      // window.location.assign("../bootsrap_portfolio/index-2.html");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
