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
        'question': '6 * 5 =',
        'answer': '30'
    },
    {
        'question': '1 * 4 =',
        'answer': '4'
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
        'question': '1 * 3 =',
        'answer': '3'
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
    },
    {
        'question': '9 * 5 =',
        'answer': '45'
    },
    {
        'question': '3 * 4 =',
        'answer': '12'
    },
    {
        'question': '7 * 9 =',
        'answer': '49'
    },
    {
        'question': '4 * 2 =',
        'answer': '8'
    },
    {
        'question': '5 * 2 =',
        'answer': '10'
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
    } else {
        getNewQuestion()
        updateQuestion()
    }
}
let placement = 5
let userPosition = 1700
function movePlayer() {
    const user = document.getElementById('horse5')
    userPosition -= 100
    user.style.right = userPosition + 'px'
    getPlacement()
    if (placement === 1 & userPosition === -100) {
        alert("Congrats! You win!")
    }
}

function getPlacement() {
    let actualPlace 
    placement = 5
    if (userPosition < horsePosition('horse1')) {
        placement--
    }
    if (userPosition < horsePosition('horse2')) {
        placement--
    }
    if (userPosition < horsePosition('horse3')) {
        placement--
    }
    if (userPosition < horsePosition('horse4')) {
        placement--
    }
    document.querySelector('span').innerText = `${placement} place`
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
    },2500)
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
    },2300)
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
    },2600)
}
const randomizeQuestions = []
for (i = 0; i < 50; i++) {
    randomizeQuestions.push(mathProblems[Math.floor(Math.random() * 17)])
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