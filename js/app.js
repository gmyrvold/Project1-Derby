console.log("Project One: Mathematics Derby")

let mathProblems = [
    {
        'question': '7 * 5 =',
        'answer': '35'
    },
    {
        'question': '4 * 6 =',
        'answer': '24'
    }
]
console.log(mathProblems)

const randomizeQuestions = []
for (i = 0; i < 1; i++) {
    const getRandomQuestion = () => {
        return mathProblems[Math.floor(Math.random() * 2)]
    }
    randomizeQuestions.push(getRandomQuestion())
mathElement = document.querySelector('#question')
mathElement.innerText = `Question: ${randomizeQuestions[0]}`
}
console.log(randomizeQuestions)
