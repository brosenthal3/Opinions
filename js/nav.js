document.getElementById('navbar').innerHTML = '<div class="container d-flex flex-column flex-md-row justify-content-between"><a class="py-2" href="#"><i class="fas fa-landmark fa-lg"></i></a><a class="py-2 d-none d-md-inline-block" href="index.html" id="home">Home</a><a class="py-2 d-none d-md-inline-block" href="quiz.html" id="quiz">Quiz</a><a class="py-2 d-none d-md-inline-block" href="#" id="ideo">Ideologies</a><a class="py-2 d-none d-md-inline-block" href="#" id="contact">Contact</a></div>';

var url = window.location.href;
var fileName = url.substring(url.lastIndexOf('/')+1);
switch (fileName){
    case "index.html":
        addClass('home');
        break;
    case "quiz.html":
        addClass('quiz');
        break;
    case "contact.html":
        addClass('contact');
        break;
    case "ideo.html":
        addClass('ideo');
        break;
}

function addClass(id){
    let e = document.getElementById(id);
    e.classList.add('ul-r')
}