import axios from "axios";

const back_end = 'https://react-native-course-45a99-default-rtdb.firebaseio.com';

interface City {
    name: string;
}

export async function storeCity({ token, city }: { token: string, city: City }) {
    try {
        const response = await axios.post(`${back_end}/cities.json?auth=${token}`, city);
        const id = response.data.name;
        return id;
    } catch (error) {
        console.error("Error storing city:", error);
        throw error;
    }
}

export async function fetchCities(token: string): Promise<City[]> {
    try {
        const response = await axios.get(`${back_end}/cities.json?auth=${token}`);
        const cities: City[] = [];
        
        for (const key in response.data) {
            const city: City = response.data[key];
            cities.push(city);
        }
        
        return cities;
    } catch (error) {
        console.error("Error fetching cities:", error);
        throw error;
    }
}

interface deleteCityProps {
    id: number,
    token: string;
}


export function deleteCity({token, id}:deleteCityProps){
    return axios.delete(`${back_end}/cities/${id}.json?auth=${token}`)
  }
