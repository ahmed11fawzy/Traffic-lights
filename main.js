const stopLight =document.querySelector('#stopLight');
const stopText =document.querySelector('#stopText');
const goLight =document.querySelector('#goLight');
const goText =document.querySelector('#goText'); 
const readyLight =document.querySelector('#readyLight');
const readyText =document.querySelector('#readyText');

const redOff='rgba(245, 65, 65, 0.39)';
const redOn='rgba(245, 65, 65, 1)';

const greenOff='rgba(0, 128, 0, 0.39)';
const greenOn='rgba(0, 128, 0, 1)';

const yellowOff='rgba(255, 255, 65, 0.36)';
const yellowOn='rgba(255, 255, 65, 1)';

const lights=[stop,ready,go];

function stop(){
    stopLight.style.backgroundColor = redOn;
    stopText.style.color = redOn;
    stopLight.style.boxShadow = `${redOn} 0px 0px 10px  ,${redOn} 0px 0px 70px inset`;
    
    goLight.style.backgroundColor = greenOff;
    goLight.style.boxShadow = `none`;
    goText.style.color = greenOff;
    readyLight.style.backgroundColor = yellowOff;
    readyText.style.color = yellowOff;
    readyLight.style.boxShadow = `none`;
}


function go(){
    stopLight.style.backgroundColor = redOff;
    stopText.style.color = redOff;
    stopLight.style.boxShadow = `none`;

    goLight.style.backgroundColor = greenOn;
    goLight.style.boxShadow = `${greenOn} 0px 0px 10px  ,${greenOn} 0px 0px 70px inset`;
    goText.style.color = greenOn;
    readyLight.style.backgroundColor = yellowOff;
    readyLight.style.boxShadow = `none`;
    readyText.style.color = yellowOff;
}

function ready(){
    stopLight.style.backgroundColor = redOff;
    stopText.style.color = redOff;
    stopLight.style.boxShadow = `none`;
    goLight.style.backgroundColor = greenOff;
    goLight.style.boxShadow = `none`;
    goText.style.color = greenOff;
    readyLight.style.backgroundColor = yellowOn;
    readyLight.style.boxShadow = `${yellowOn} 0px 0px 10px  ,${yellowOn} 0px 0px 70px inset`;
    readyText.style.color = yellowOn;

}


function trafficLightWork(){
    let i=0;
    setInterval(function(){
        lights[i]();
        i++;
        if(i>=lights.length){
            i=0;
            
        }
    },2000);
}

trafficLightWork();