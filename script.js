//now on all our code will be inside this event listner
//now we need to pick up the elements from our html file by class name as i mentioned before, for this we will use document query selector 

document.addEventListener('DOMContentLoaded', () =>{
    const squares = document.querySelectorAll('grid div')  //what we are telling the file to do is select all the divs in a div with class name of grid and call them all squares for the file.
    const scoreDisplay = document.querySelector //we will also select the span element and call it the scoreDisplay
    const startBtn = document.querySelector('.start') // select the button with a class name of Start

    const width = 10
    let currentIndex = 0
    let appleIndex = 0
    let currentSnake = [2,1,0] //so the div in our grid being 2 (or the HEAD), and 0 being the end Tail, with all 1's the body for now on

    let direction = 1
    let speed = 0.9
    let score = 0
    let intervalTime = 0
    let interval =0

// to start and restart a game
function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score =0
    //randomApple()
    direction = 1
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2,1,0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(moveOutcomes, intervalTime)
}

//function that deals with all the ove outcomes of the snake

//deals with the snake hitting border and snake hitting self

//deals with snake getting apple






    //assign functions to key codes
    //each keys on the keyboard has keycodes assign to it
    function control(e) {
        squares[currentIndex].classList.remove('snake')  //we are removing the class of snake from all the squares

        if(e.keyCode === 39) {
            direction=1 //if we press the right arrow button in keyboard the snake will go right one
        } else if (e.keyCode === 38) {
            direction = -width // if we presss up arrow the snake will go back ten divs ,appearing to go up
        } else if (e.keyCode === 37){
            direction -1 // if we press left the snake will go left one div
        } else if (e.keyCode === 40) {
            direction = +width  // if we press down the snake head will instantly appear in the div ten divs where you are now
        }
    }

    document.addEventListener('keyup', control)   //finally lets add eventlistner every time a key is pressed to excecute the function control

})