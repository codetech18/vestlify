import {
  child,
  get,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";
import { dbRef } from "./dashboard/firebase.js";

const user_name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const country = document.getElementById("country");
const acctType = document.getElementById("acct");

const name = document.getElementById("users-name");
const mail = document.getElementById("users-email");

// Makes use of the DOMContentLoaded, i.e. the event that is triggered as the HTML content - only the HTML content - of the document gets loaded, document event to retrieve the details of the user from the database and populate the necessary regions.
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Gets the response from the firebase realtime database.
    const res = await getData(dbRef);

    // Retrieves the snapshot by calling the val() function of the response gotten above.
    const snapshot = res.val();
    console.log(snapshot);

    // Updates the "Hi welcome" segment of the dashboard by adding the names of the the user gotten from the database.
    user_name.innerHTML = snapshot.name;
    name.innerHTML = `Hi, ${snapshot.name}`;

    // Updates the balnce displayed on the dashboard using the data gotten from the realtime database.
    phone.innerHTML = snapshot.phone_number;

    // Updates the profit balnce displayed on the dashboard using the data gotten from the realtime database.
    country.innerHTML = snapshot.country;

    email.innerHTML = snapshot.email;
    mail.innerHTML = snapshot.email;

    acctType.innerHTML = snapshot.account_type;
  } catch (error) {
    console.log(error);
    console.log(error.message);
  }
});

function getData(ref) {
  // Retrieves the details of the specific user using the id that has been saved to localStorge on user login.
  // It returns a promise that is to be resolved using async/await or ".then & .catch"
  return get(child(ref, `users2/${window.localStorage.getItem("id")}`));
}
