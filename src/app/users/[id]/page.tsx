import React, {FC} from 'react';

interface Props{
    params: Promise<{id: string}>
}


const SingleUserPage:FC<Props> = async ({params}) => {
    const {id} = await params;
    console.log(id)
    return (
        <div>

        </div>
    );
};

export default SingleUserPage;

