

function motionBird () {
    let bird = document.querySelector("img")
    let positonY = 50

    onkeypress = (evento) => {
        console.log(evento)
        let bird = evento.target.children[1].children[0]
        bird.style.top = `${positonY}%`

        if (bird.style.top == "2%") {
            bird.style.top = `2%`
        }

        else {
            positonY --
        }
    }

    onkeyup = (evento) => {
        let bird = evento.target.children[1].children[0]
        bird.style.top = `${90}%`

        // if (bird.style.top == "90%") {
        //     bird.style.top = "90%"
        // }

        // else {
        //     positonY ++
        // }
    }
}

motionBird()
