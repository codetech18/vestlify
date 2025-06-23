// document.querySelector("#show-payment").addEventListener("click", function () {
//     document.querySelector(".popup").classList.add("active");

// });

// document.querySelector("#show-payment2").addEventListener("click", function () {
//     document.querySelector(".popup").classList.add("active");

// });

document.querySelector("#show-payment3").addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");

});

document.querySelector("#show-payment4").addEventListener("click", function () {
    document.querySelector(".popup2").classList.add("active");

    // $.ajax({
    //   url: "https://submit-form.com/9cFA2ufE",
    //   method: 'POST',
    //   data: datatosend,
    //   cache: false,
    //   contentType:'application/json; charset=utf-8',
    //   dataType: 'json',
    //   success: function(resp){
    //     closeloader();
    //     parser(resp, servicetype, dataone)
    //   },
    //   error: function(data){
    //     closeloader();
    //     notify("An error happened, couldn't connect!","error");
    //   }
    // });

});

document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
});

document.querySelector(".popup2 .close-btn2").addEventListener("click", function () {
  document.querySelector(".popup2").classList.remove("active");
});

document.querySelector(".popup3 .close-btn3").addEventListener("click", function () {
  document.querySelector(".popup3").classList.remove("active");
});

const inputField = document.getElementById("amountBtn1");
const walletAdress = document.getElementById("btnBtn1");

// document.querySelector(".popup .button").addEventListener("click", function () {
//   if (inputField && inputField.value.trim() !== "" && walletAdress.value !== "") {
//     document.querySelector(".popup").classList.remove("active");
//     if(window.localStorage.getItem("balance") === "0") {
//       alert("Unfortunately, you do not have sufficient balance to withdraw!");
//     } else {
//       alert("Withdrawal in process");
//       document.querySelector(".popup2").classList.add("active");
//     }
//     alert("Your withdrawal is being processed!");
//     document.querySelector(".popup2").classList.add("active");
//   } else {
//     alert("Fill in the required details");
//   }
// });

document.querySelector(".close-btn2").addEventListener("click", () => {
  document.querySelector(".popup2").classList.remove("active");
});


document.querySelector("#signal").addEventListener("click", function() {
  document.querySelector(".invoice-card-row").classList.remove("active");
})