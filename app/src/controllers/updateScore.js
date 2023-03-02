import axios from "axios"
import { BASE_URL } from "../utils/config"

export default async function updateScore(e, questionId, optionId, isBad) {
    console.log(`Question ${questionId} - Option ${optionId}`)
    // try {
    //     if (!isBad) {
    //         const url = `${BASE_URL}/${questionId}`
    //         const result = await axios.get(url)
    //         const oldScore = result.data.score || 0

    //         await axios.patch(url, {
    //             score: oldScore + 1
    //         }).then(() => console.log('Score updated!'))
    //     }
    // } catch (e) {
    //     console.log(e)
    // }
}