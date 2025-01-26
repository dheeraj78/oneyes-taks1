const video = document.getElementById('video');
let videoLink = ''
let baseString = "https://www.youtube.com/embed/";
let btnId = ''


function mark(){
    const buttons = document.querySelectorAll('.btns');
    const btnLength = buttons.length;
    videoLink = video.src.replace(baseString,"");
    // console.log(videoLink)
    let btnsource = buttons.forEach(function(btn){
        // console.log(btn)
        btnId = btn.id

        if(videoLink == btnId){
            if(!btn.classList.contains('done')){
                btn.classList.add('done');
            }
            return;
        }
        
    }) 
    updatePercentage(btnLength)
}

function updatePercentage(btnLength){
    let allDone = document.querySelectorAll('.done');
    let allLength = allDone.length;
    console.log(allLength)
    let percentage = allLength/btnLength * 100
    document.getElementById('percentage').innerHTML = `${percentage}%`;
    console.log(percentage);
}