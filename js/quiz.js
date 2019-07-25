//function that gets executed once the quiz is submitted
function submitQuiz(){
    //all of the social questions id's
    var socQuestions = [
        'q1',
        'q2',
        'q3',
        'q4',
        'q5',
        'q6',
        'q7'
    ];
    //all of the economical questions id's
    var ecoQuestions = [
        'q8',
        'q9',
        'q10',
        'q11',
        'q12',
        'q13',
        'q14'
    ];
    //declare the score variables
    var socScore = 0;
    var ecoScore = 0;

    //get the score from all of the social questions
    socQuestions.forEach((q, index)=>{
        //gets all of the radio inputs from the first 7 questions.
        let radios = document.getElementsByName(q);
        let total = 0;
        //for each radio input:
        radios.forEach((current, i)=>{
            //check if it's checked
            if(current.checked){
                //if it is, add it's value to the total score per question
                total += +radios[i].value;
            }
        })
        //add the total score per question to the total social score
        socScore += total;
    });
    //get the score from all of the economical question and do the same thing for economical score.
    ecoQuestions.forEach((q, index)=>{
        let radios = document.getElementsByName(q);
        let total = 0;
        radios.forEach((current, i)=>{
            if(current.checked){
                total += +radios[i].value;
            }
        })
        ecoScore += total;
    });

    //create a (one-item) array of the ideology object that fit your score
    const quizResult = ideologyObjects.filter((ideology) =>{
        return ideology.xmin <= ecoScore && ideology.xmax >= ecoScore && ideology.ymin <= socScore && ideology.ymax >= socScore;
    });
    //get the name of the first item of the result array.
    const quizResultIdeo = quizResult[0].name;

    //hide and show sections of the page
    document.getElementById('afterQuiz').style.display="block";
    document.getElementById('quizSection').style.display="none";

    //get the element where you show the ideology and do that
    const showIdeo = document.getElementById('ideoShow');
    showIdeo.innerHTML = quizResultIdeo;

    //add underline to the ideology:red/blue/yellow
    //the color depends on the ideology (right/left/centre).
    showIdeo.classList.add(ideoClass());
    function ideoClass(){
        let i = quizResultIdeo;
        if(i == "Facism" || i == "Conservatism" || i == "Anarcho-Capitalism" || i == "Classical Liberalism"){
            return 'ul-b';
        } else if(i == "Communism" || i == "Socialism" || i == "Anarcho-Communism" || i == "Democratic-Socialism"){
            return "ul-r";
        } else{
            return "ul-y";
        }
    }
}