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

    //assign functions to key codes
    //each keys on the keyboard has keycodes assing to it
    
})