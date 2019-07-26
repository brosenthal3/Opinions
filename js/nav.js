document.getElementById('navbar').innerHTML = `
<nav class="site-header sticky-top py-2 navbar navbar-expand-sm navbar-dark">
            <div class="container">
                <a class="navbar-brand px-4" href="index.html"><i class="fas fa-landmark fa-lg"></i></a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">    
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="nav">
                    <ul class="navbar-nav justify-content-center mr-auto mt-2 mt-lg-0">
                        <li class="nav-item px-4">
                            <a class="py-2" href="index.html" id="home">Home</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="py-2" href="quiz.html" id="quiz">Quiz</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="py-2" href="ideo.html" id="ideo">Ideologies</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="py-2" href="contact.html" id="contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>`;


var url = window.location.href;
var fileName = url.substring(url.lastIndexOf('/')+1);
var pageName = fileName.split('.').slice(0, -1).join('.');
console.log(pageName);
switch (pageName){
    case "index" || undefined:
        addClass('home');
        break;
    case "quiz":
        addClass('quiz');
        break;
    case "contact":
        addClass('contact');
        break;
    case "ideo":
        addClass('ideo');
        break;
}

function addClass(id){
    let e = document.getElementById(id);
    e.classList.add('ul-y')
}