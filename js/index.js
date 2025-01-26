//  image slider code 

const slides = document.querySelectorAll('.images-slider img');
// console.log(slide)
const totalLength = slides.length
// console.log(totalLength)
let currentIndex = 0

function nextslide(){
    currentIndex++
    if (currentIndex >= totalLength){
        currentIndex = 0
    }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    })
    
}

setInterval(nextslide,3000)


// course js 

let iframe = document.getElementById("video");

function changeyt(id){
    // console.log(id);
    iframe.src= `https://www.youtube.com/embed/${id}`;
}

const btns = document.querySelectorAll('.btns');
const Length = btns.length;
// console.log(Length)

function change() {
    const container = document.getElementsByClassName('coming-soon')[0];
    container.style.display = "block";
    // alert("working")

    let timeLeft = 5;
    const timerEle = document.getElementById('para');

    function timer(){
        if (timeLeft>0){
            timerEle.innerHTML = timeLeft;
            timeLeft--;
        }
        else{
            container.style.display = "none";
        }
    }

    const timerInterval = setInterval(timer, 1000); 
    timer();
}

const quizStartBtn = document.getElementsById('quiz-start-btn');

function changeLocation(){
    window.location.href="../quiz.html";
}



