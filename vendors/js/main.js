let position = 0;
var basketPostion = Math.floor(Math.random(window.innerWidth) * innerWidth);
let character = $(".character");
let basket = $(".basket")
let snake = $(".snake")
// 37 to left
// 39 to right

let windowWidth = window.innerWidth
basket.css("left", basketPostion)
setInterval(function () {
    basketPostion = Math.floor(Math.random(window.innerWidth) * innerWidth)
    basket.css("left", basketPostion)

}, 5000)



document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
        case 37:
            if (position == 0) {
                position = 0
            } else {
                position -= 10;
            }
            character.css("transform", "rotateY(180deg)")

            break;
        case 39:
            if (position == windowWidth - character.width()) {
                position = windowWidth - character.width()
            } else {
                position += 10;
            }
            character.css("transform", "rotateY(0deg)")

            break;
        case 32:
            snake.animate({ top: "85%" })

            break;
        default:
            console.log("Error");
            break;
    }
    snake.css("top", "16%")
    character.css("left", position)
    snake.css("left", position + 75)


    console.log("Snake",position + 75);
})


