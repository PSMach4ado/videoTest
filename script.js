
let video = document.getElementById("video1");

function retroceder(){
    video.currentTime -= 15;
}

function avancar(){
    video.currentTime += 15;
}

function diminuir_vel(){
    let limite = -2;
    if(video.playbackRate >= limite){
        video.playbackRate -= 0.25;
    }else{
    }
}

function aumentar_vel(){
    let limite = 1.5;
    if(video.playbackRate <= limite){
        video.playbackRate += 0.5;
    }else{
    }
}

function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stop(){
    video.pause();
    video.currentTime = 0;
}


