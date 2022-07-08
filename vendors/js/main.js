let user =
{
    name: "",
    isLogin: false,
    score: 0
}

let users = []
// localStorage.setItem("users", JSON.stringify(users))


// localStorage.setItem("user", JSON.stringify(user))



Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    input: "text",
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, login it!',
    preConfirm: (userName) => {
        let user = {
            name: userName,
            score: 0,
            lives: 3,
        }
        localStorage.setItem("user", JSON.stringify(user))
    }
}).then((result) => {
    if (result.isConfirmed) {


    } else {
        window.location.reload()
    }


})







function GameOver(user) {
    let data = [];
    let allUsers = JSON.parse(localStorage.getItem("users"))

    for (let i = 0; i < allUsers.length; i++) {
        data.push(allUsers[i])
    }
    data.push(user)
    console.log(data);
    localStorage.setItem("users",JSON.stringify(data))








    Swal.fire({
        title: 'GAME OVER!',
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok!'
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("score", 0)
            window.location.reload()
        }
    })
}



let position = 0;
let character = $(".character");
let basket = $(".basket")
let snake = $(".snake")
var basketPostion = basket.attr("currentPosition");
let snakePosition = snake.attr("currentPosition");
let myCurrentScore = $(".currentScore")




// if (user.name.length == 0) {
//     alert("Daxil olmalisiniz")
// }else{

// }



console.log(user.name.length);

let windowWidth = window.innerWidth
setInterval(function () {
    basketPostion = Math.floor(Math.random(window.innerWidth) * innerWidth)
    $(".basket").attr("currentPosition", basketPostion)
    basket.css("left", basketPostion)
}, 10000)





document.addEventListener('keydown', (event) => {

    switch (event.keyCode) {
        case 37:
            if (position == 0) {
                position = 0
            } else {
                position -= 10;
            }
            character.css("transform", "rotateY(180deg)")
            $(".snake").attr("currentPosition", position)

            break;
        case 39:
            if (position == windowWidth - character.width()) {
                position = windowWidth - character.width()
            } else {
                position += 10;
            }
            $(".snake").attr("currentPosition", position)
            character.css("transform", "rotateY(0deg)")

            break;
        case 32:
            snake.animate({ top: "85%" })
            let snakeCurrent = snake.attr("currentPosition")
            let result = basketPostion - (snakeCurrent)

            if (result <= 100 && result >= -100) {
                let currentUser = JSON.parse(localStorage.getItem("user"))
                console.log(currentUser.score);
                let currentScore = localStorage.getItem("score")
                let currentCount = currentScore * 1 + 1
                localStorage.setItem("score", currentCount)
                myCurrentScore.text(`Score : ${currentCount}`)
                currentUser.score = currentCount
                localStorage.setItem("user", JSON.stringify(currentUser))
            } else {
                let currentUser = JSON.parse(localStorage.getItem("user"))
                currentUser.lives -= 1;
                localStorage.setItem("user", JSON.stringify(currentUser))
                if (currentUser.lives == 0) {

                    GameOver(currentUser)
                }
            }




            setInterval(function () {
                snake.css("top", "16%")
            }, 1000)



            break;
        default:
            console.log("Error");
            break;
    }
    snake.css("top", "16%")
    character.css("left", position)
    snake.css("left", position + 75)


    // console.log("Snake",position + 75);
})




