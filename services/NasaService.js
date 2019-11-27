import Axios from "axios";
import { API_URL} from "./constants"


const getFullUrl = url => (
    `${url}&api_key=${process.env.REACT_APP_API_KEY}`
)

export const getNasaData = async astronaut => {
    const response = await Axios.get(getFullUrl(`${API_URL}?q=${astronaut}`))

    return response.data;
}