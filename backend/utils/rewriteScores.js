const axios = require('axios')
const fs = require('fs/promises')
const { BASE_URL } = require('./config')

async function rewriteScores() {
    try {
        const result = await axios.get(BASE_URL)
        const allQuestions = result.data

        console.log(result)
        const updatedAllQuestions = allQuestions.map((ele, idx) => {
            const updatedOptions = ele.options.map(o => {
                return {
                    ...o,
                    score: 0
                }
            })
            return {
                ...ele,
                options: updatedOptions
            }
        })
        console.log(updatedAllQuestions)
        // await axios.put(BASE_URL, {
        //     questions: updatedAllQuestions
        // }).then(() => console.log('Scores cleared!'))
        await fs.writeFile('../questions.json', JSON.stringify({ questions: updatedAllQuestions }, null, 2))

    } catch (error) {
        console.log(error)
    }
}

rewriteScores()