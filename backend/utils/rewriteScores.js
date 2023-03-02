const axios = require('axios')
const { BASE_URL } = require('./config')

async function rewriteScores() {
    try {
        const result = await axios.get(BASE_URL)
        const allQuestions = result.data

        const updatedAllQuestions = allQuestions.map((ele, idx) => {
            const updatedGood = ele.good.map(g => {
                return {
                    ...g,
                    score: 0
                }
            })
            return {
                ...ele,
                good: updatedGood
            }
        })
        console.log(updatedAllQuestions)
        await axios.patch(BASE_URL, {
            ...updatedAllQuestions,
        }).then(() => console.log('Scores cleared!'))

    } catch (error) {
        console.log(error)
    }
}

rewriteScores()