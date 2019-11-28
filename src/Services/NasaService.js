import Axios from "axios";
import {API_URL} from "../constants"

export const getNeoFeed = async (startDate, endDate) => {
    const data = await Axios.get(
        `${API_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.REACT_APP_API_KEY}`
    );
    return data;
}
 