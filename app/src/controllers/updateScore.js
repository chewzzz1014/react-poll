import axios from "axios"
import { BASE_URL } from "../utils/config"

export default async function updateScore(e, questionId, optionId, isBad) {
    console.log(`Question ${questionId} - Option ${optionId}`)
    try {
        const url = `${BASE_URL}/${questionId}`
        const result = await axios.get(url)
        const oldData = result.data

        const updatedOptions = oldData.options.map((ele, idx) => {
            if (ele.id === optionId) {
                return {
                    ...ele,
                    score: ele.score + 1
                }
            } else {
                return ele
            }
        })
        console.log(updatedOptions)

        await axios.patch(url, {
            ...oldData,
            options: updatedOptions
        }).then(() => console.log('Score updated!'))
    } catch (e) {
        console.log(e)
    }
}