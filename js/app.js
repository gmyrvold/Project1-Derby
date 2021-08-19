console.log("Project One: Mathematics Derby")

let mathProblems = [
    {
        'question': '7 * 5 =',
        'answer': '35'
    },
    {
        'question': '4 * 6 =',
        'answer': '24'
    },{
        'question': '10 * 5 =',
        'answer': '50'
    },
    {
        'question': '1 * 26 =',
        'answer': '26'
    },
    {
        'question': '2 * 6 =',
        'answer': '12'
    },
    {
        'question': '5 * 3 =',
        'answer': '15'
    },
    {
        'question': '9 * 4 =',
        'answer': '36'
    },
    {
        'question': '8 * 6 =',
        'answer': '48'
    },
    {
        'question': '11 * 3 =',
        'answer': '33'
    },
    {
        'question': '7 * 3 =',
        'answer': '21'
    },
    {
        'question': '2 * 7 =',
        'answer': '14'
    },
    {
        'question': '8 * 3 =',
        'answer': '24'
    }
]
//console.log(mathProblems)
function updateQuestion() {
    mathElement = document.querySelector('#question')
    mathElement.innerHTML = `Question: ${randomizeQuestions[0].question}`
}

function checkAnswer() {
    let answer = document.querySelector('#answer').value
    if (answer === randomizeQuestions[0].answer) {
        movePlayer()
    }
}
let placement = 0
let userPosition = 1700
function movePlayer() {
    const user = document.getElementById('horse5')
    userPosition -= 100
    user.style.right = userPosition + 'px'
    getPlacement()
}

function getPlacement() {
    let actualPlace 
    placement = 0
    if (userPosition < horsePosition('horse1')) {
        placement++
    }
    if (userPosition < horsePosition('horse2')) {
        placement++
    }
    if (userPosition < horsePosition('horse3')) {
        placement++
    }
    if (userPosition < horsePosition('horse4')) {
        placement++
    }
    actualPlace = 5 - placement
    document.querySelector('span').innerText = `${actualPlace} place`
}

function horsePosition(id) {
    let x = document.getElementById(id).style.right
    let y = x.substring(0,x.length-2)
    return parseInt(y)
}

function getNewQuestion() {
    randomizeQuestions.shift()
}

function moveHorse1() {
    const comPlayers = document.getElementById('horse1')
    let startPosition = 1700
    const movement = setInterval(function(){
        startPosition -= 100
        comPlayers.style.right = startPosition + 'px'
        getPlacement()
        if (startPosition === -100) {
            clearInterval(movement)
        }
    },2500)
}
function moveHorse2() {
    const comPlayers = document.getElementById('horse2')
    let startPosition = 1700
    const movement = setInterval(function(){
        startPosition -= 100
        comPlayers.style.right = startPosition + 'px'
        getPlacement()
        if (startPosition === -100) {
            clearInterval(movement)
        }
    },1800)
}
function moveHorse3() {
    const comPlayers = document.getElementById('horse3')
    let startPosition = 1700
    const movement = setInterval(function(){
        startPosition -= 100
        comPlayers.style.right = startPosition + 'px'
        getPlacement()
        if (startPosition === -100) {
            clearInterval(movement)
        }
    },1500)
}
function moveHorse4() {
    const comPlayers = document.getElementById('horse4')
    let startPosition = 1700
    const movement = setInterval(function(){
        startPosition -= 100
        comPlayers.style.right = startPosition + 'px'
        getPlacement()
        if (startPosition === -100) {
            clearInterval(movement)
        }
    },2000)
}
const randomizeQuestions = []
for (i = 0; i < 10; i++) {
    randomizeQuestions.push(mathProblems[Math.floor(Math.random() * 12)])
}
updateQuestion()

const buttonSubmit = document.querySelector('#submit')
buttonSubmit.addEventListener('click', () => {
    checkAnswer()
    getNewQuestion()
    updateQuestion()
})
const startButton = document.querySelector('#startGame')
startButton.addEventListener('click', () => {
    moveHorse1()
    moveHorse2()
    moveHorse3()
    moveHorse4()
})