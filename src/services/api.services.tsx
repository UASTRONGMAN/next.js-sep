import {urls} from "@/constants/urls";
import {ICar} from "@/models/ICar";

const getAllCars = async ():Promise<ICar[]> => {
    return await fetch(urls.cars, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
        .then(value => value.json())
}

const addCar = async (formData:FormData):Promise<ICar> => {
    return await fetch(urls.cars, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            brand: formData.get('brand'),
            price: formData.get('price'),
            year: formData.get('year')
        })
    })
        .then(value => value.json())
}



export {
    getAllCars,
    addCar
}