import {FC} from "react";
import {ICar} from "@/models/ICar";
import Car from "@/components/cars-list/car/Car";

interface Props{
    cars:ICar[]
}

const CarsList:FC<Props> = ({cars}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default CarsList;