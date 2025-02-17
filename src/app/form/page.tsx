import Form from "next/form";
import {save} from "@/services/server-actions";


const FormPage = () => {



    return (
        <div>
            <Form action={save} >
                <input type="text" placeholder={'brand'} name={'brand'}/>
                <input type="number" placeholder={'price'} name={'price'}/>
                <input type="number" placeholder={'year'} name={'year'}/>
                <button>Add car</button>
            </Form>
        </div>
    );
};

export default FormPage;