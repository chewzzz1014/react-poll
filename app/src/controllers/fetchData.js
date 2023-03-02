import axios from "axios"
import { BASE_URL } from "../utils/config"

export default async function fetchData(setData) {
    const d = await axios.get(BASE_URL)
    setData(d.data)
}