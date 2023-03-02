import axios from "axios"
import { BASE_URL } from "../utils/config"

export default async function updateScore(e, questionId, optionId, isBad) {
    console.log(`Question ${questionId} - Option ${optionId}`)
    try {
        if (!isBad) {
            const url = `${BASE_URL}/${questionId}`
            const result = await axios.get(url)
            const oldData = result.data
            const oldScore = oldData.good[optionId].score
            const updatedGood = oldData.good.map((ele, idx) => {
                if (ele.id === optionId) {
                    return {
                        ...ele,
                        score: ele.score + 1
                    }
                } else {
                    return ele
                }
            })

            await axios.patch(url, {
                ...oldData,
                good: updatedGood
            }).then(() => console.log('Score updated!'))
        } else {
            return;
        }
    } catch (e) {
        console.log(e)
    }
}