const slides = document.querySelectorAll('.question-slider');
// console.log(slides)
const slideLength = slides.length;
// console.log(slideLength)
let currentIndex = 0;
const qno = document.getElementById('qno');
// console.log(qno)
let isSubmitted = false;
const btn = document.getElementById('changeQuestion');

function questionChange(){
    currentIndex++
    if(currentIndex >=slideLength){
        btn.onclick = submit;
        btn.innerHTML = "Submit"
        clearInterval(timerInterval);
    }
    slides.forEach(function(slide){
        // console.log(slide)
        if(currentIndex < slideLength){
            qno.innerHTML = `${currentIndex + 1} of ${slideLength}`;
            slide.style.transform = `translateX(-${currentIndex * 100}%)`;
            timeLeft = 10;
        }
        return;
    })
}

let timeLeft = 10;
const time = document.getElementById('time');

function updateTime() {
    time.innerHTML = timeLeft;
    if (timeLeft <= 0) {
        if(currentIndex+1 >= slideLength){
            btn.innerHTML = "Submit"
            if (!isSubmitted){
                submit();
                isSubmitted= true;
            }
            
        }
        else{
            questionChange();
        }
    } else {
        timeLeft--;
    }
}

let timerInterval = setInterval(updateTime, 1000);


function submit(){
    console.log('working')
    isSubmitted = true;
    evaluateQuiz()
}


const correctAnswers = {
    q1: 'b',
    q2: 'd',
    q3: 'a',
    q4: 'c',
    q5: 'b'
};

function evaluateQuiz() {
    const coverresult = document.getElementById('cover-result');

    if(coverresult.classList.contains('none')){
        coverresult.classList.remove('none')
    }
    
    const quiz = document.getElementById('quiz');
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    for (let q in correctAnswers) {
        const userAnswer = quiz.querySelector(`input[name="${q}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswers[q]) {
            score++;
        }
    }

    // alert(`You scored ${score} out of ${totalQuestions}`);
    const fromjs1= document.getElementById('fromjs1');
    const fromjs2= document.getElementById('fromjs2');
    const fromjs3= document.getElementById('fromjs3');

    fromjs1.innerHTML = score;
    fromjs2.innerHTML = totalQuestions-score;
    fromjs3.innerHTML = `${score/totalQuestions * 100}%`;
}

function homepage(){
    window.location.href="../index.html";
}


