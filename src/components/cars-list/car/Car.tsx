import {FC} from "react";
import {ICar} from "@/models/ICar";

interface Props{
    car: ICar
}

const Car:FC<Props> = ({car}) => {
    return (
        <div>
            {car.id}. {car.brand}
        </div>
    );
};

export default Car;