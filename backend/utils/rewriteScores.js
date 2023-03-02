const axios = require('axios')
const { BASE_URL } = require('./config')

async function rewriteScores() {
    try {
        const result = await axios.get(BASE_URL)
        const allQuestions = result.data

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
        //console.log(updatedAllQuestions)
        await axios.put(BASE_URL, {
            ...updatedAllQuestions,
        }).then(() => console.log('Scores cleared!'))

    } catch (error) {
        console.log(error)
    }
}

rewriteScores()