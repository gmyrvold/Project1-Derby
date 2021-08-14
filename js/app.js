console.log("Project One: Mathematics Derby")

let mathProblems = [
    {
        'question': '7 * 5 =',
        'answer': '35'
    },
    {
        'question': '4 * 6 =',
        'answer': '24'
    },
    {
        'question': '1 * 26 =',
        'answer': '26'
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
let userPosition = 1700
function movePlayer() {
    const user = document.getElementById('horse5')
    userPosition -= 100
    user.style.right = userPosition + 'px'
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

        if (startPosition === -100) {
            clearInterval(movement)
        }
    },1800)
}
function moveHorse2() {
    const comPlayers = document.getElementById('horse2')
    let startPosition = 1700
    const movement = setInterval(function(){
        startPosition -= 100
        comPlayers.style.right = startPosition + 'px'

        if (startPosition === -100) {
            clearInterval(movement)
        }
    },1600)
}
function moveHorse3() {
    const comPlayers = document.getElementById('horse3')
    let startPosition = 1700
    const movement = setInterval(function(){
        startPosition -= 100
        comPlayers.style.right = startPosition + 'px'

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

        if (startPosition === -100) {
            clearInterval(movement)
        }
    },1200)
}
const randomizeQuestions = []
for (i = 0; i < 10; i++) {
    randomizeQuestions.push(mathProblems[Math.floor(Math.random() * 3)])
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