import {getAllCars} from "@/services/api.services";
import CarsList from "@/components/cars-list/CarsList";


const CarsPage = async () => {
    const cars = await getAllCars();
    return (
        <div>
            <CarsList cars={cars}/>
        </div>
    );
};

export default CarsPage;