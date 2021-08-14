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
        document.getElementById('horse5').style.right='1600px'
    }
}

function getNewQuestion() {
    console.log(randomizeQuestions)
    randomizeQuestions.shift()
    console.log(randomizeQuestions)
}

const randomizeQuestions = []
for (i = 0; i < 10; i++) {
    randomizeQuestions.push(mathProblems[Math.floor(Math.random() * 3)])
}
updateQuestion()
// document.querySelector('#submit').addEventListener('click',answerQuestion)
const buttonSubmit = document.querySelector('#submit')
buttonSubmit.addEventListener('click', () => {
    checkAnswer()
    getNewQuestion()
    updateQuestion()
})