let lodash = require("lodash")

function randomACada(min,max, seconds) {
    setInterval(() => console.log(lodash.random(min,max)), 1000*seconds)
}
randomACada(90,100,3)
