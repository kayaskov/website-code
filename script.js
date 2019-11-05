var button = document.querySelector('.button');
var target = document.querySelector('body');

button.addEventListener('click', function () {
    target.classList.toggle('effect')
})

//var button = document.querySelector('button');
//var body = document.querySelector('body');

//button.addEventListener("click", function () {
//           body.classList.toggle('body2')
//   }

//button.addEventListener('click', function () {
//    document.body.style.backgroundColor = "black";
//});

//declaratie van dom elementen
//var zoekveld = document.querySelector('body>header');
//var zoekbutton = document.querySelector('body>header>button');

//actie !
//zoekbutton.addEventListener("click", function () {
//    zoekveld.classList.toggle('show-search');
//});
