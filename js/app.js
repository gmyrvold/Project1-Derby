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

const randomizeQuestions = []
for (i = 0; i < 1; i++) {
    const getRandomQuestion = () => {
        return mathProblems[Math.floor(Math.random() * 3)]
    }
    randomizeQuestions.push(getRandomQuestion())
mathElement = document.querySelector('#question')
mathElement.innerHTML = `Question: ${randomizeQuestions[0].question}`
}
//console.log(randomizeQuestions)

function answerQuestion() {
    let answer = document.querySelector('#answer').value
    if (answer === randomizeQuestions[0].answer) {
        document.getElementById('horse5').style.right='1600px'
    }
}
document.querySelector('#submit').addEventListener('click',answerQuestion)
