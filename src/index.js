//1//
let count = 0
const textHelloInterval = setInterval(textInterval, 1000)

function textInterval(){
    console.log(`Hello${count + 1}`)
    count++

    if(count === 5){
        clearInterval(textHelloInterval)
    }
}


//2//

const anim1 = document.querySelector(".anim1")
const anim2 = document.querySelector(".anim2")
const anim3 = document.querySelector(".anim3")

const animation = setInterval(animElem, 2000)

let position = 0;
function animElem(){
    if(anim1.scrollWidth > 100) {
        anim1.style.width = `${anim1.scrollWidth - 2}px`
        anim1.style.height = `${anim1.scrollHeight - 2}px`

        position -= 10; 
        anim2.style.transform = `translateX(${position}px)`;

        anim3.style.background = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`
    } else{
        anim1.style.width = `${anim1.scrollWidth + 2}px`
        anim1.style.height = `${anim1.scrollHeight + 2}px`

        position += 10; 
        anim2.style.transform = `translateX(${position}px)`;

        anim3.style.background = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`
    }
    
}

//4//

const inputCount = document.querySelector(".input-count")
const textInput = document.querySelector(".text-input")
const btnInput = document.querySelector(".input-start")

let timer = 0; 

btnInput.addEventListener("click", () => {
    let countInp = inputCount.value; 
    textInput.textContent = `Залишилось: ${countInp} сек.`; 

    clearInterval(timer); 
    timer = setInterval(() => {
        countInp -= 1; 
        textInput.textContent = `Залишилось: ${countInp} сек.`; 

        if (countInp <= 0) {
            clearInterval(timer);
            textInput.textContent = "Час вийшов!";
        }
    }, 1000);
});

//3//

const elemGame = document.querySelector(".elem-game")
const resultTime = document.querySelector(".result-time")
const resultGame = document.querySelector(".result-game")


const gameInterval = setInterval(resultTimer, 1000)
let countClick = 0
let gameTimer = 10

elemGame.addEventListener("click", ()=>{
    countClick += 1
    resultGame.textContent = `${countClick}`

})



function resultTimer(){
    gameTimer -= 1
    resultTime.textContent = gameTimer
    if (gameTimer === 0){
        resultTime.textContent = "Час вийшов"
        clearInterval(gameInterval)
    }
}

