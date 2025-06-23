// import { auth } from "./dashboard/firebase";

// const user = auth.currentUser;

// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }

const btn = document.querySelector("#bitcoin");

btn.addEventListener("click", () => {
  const codeToCopy = "bc1qak030zvyuusdx2hh6p4qm7gh8u4x5wnuxdwvjf";
  navigator.clipboard.writeText(codeToCopy);
  alert("copied to clipboard");
});

const btn1 = document.querySelector("#ethereum");

btn1.addEventListener("click", () => {
  const codeToCopy = "0x17ADf6dDfe8d555a4546947659b6e4322797aB29";
  navigator.clipboard.writeText(codeToCopy);
  alert("copied to clipboard");
});

const btn2 = document.querySelector("#usdt");

btn2.addEventListener("click", () => {
  const codeToCopy = "0x17ADf6dDfe8d555a4546947659b6e4322797aB29";
  navigator.clipboard.writeText(codeToCopy);
  alert("copied to clipboard");
});
const btn3 = document.querySelector("#btc-cash");

btn3.addEventListener("click", () => {
  const codeToCopy = "0x17ADf6dDfe8d555a4546947659b6e4322797aB29";
  navigator.clipboard.writeText(codeToCopy);
  alert("copied to clipboard");
});
