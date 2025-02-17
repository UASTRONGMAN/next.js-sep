'use server'

import {addCar} from "@/services/api.services";

export const save = async (formData:FormData) => {
    console.log(formData)
    const car = await addCar(formData);
    console.log(car)
}