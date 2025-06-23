document.querySelector('.signIn').addEventListener('click', function () {
  document.querySelectorAll('.container').forEach(function (elem) {
    elem.classList.toggle('display');
  });
  // var containers = document.querySelectorAll('.container');
  // for (var i = 0; i < containers.length; i++) {
  //   containers[i].classList.remove('display');
  // }
});

document.querySelector('.signUp').addEventListener('click', function () {
  location.reload();
});


