import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
// import { useState } from "react";
// import sortBy from "sort-by";


const Coffees = () => {
    const data = useLoaderData()
    // const [coffees, setCoffees] = useState(data);
    // const handleSort = (sortBy) => {
    //     if (sortBy == 'popularity') {

    //     }
    //     else if (sortBy == 'rating')
    // }
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className='text-3xl font-thin'>
                        Sort Coffee&apos;s by Popularity & Rating-&gt;
                    </h1>
                </div>
                <div className='space-x-4'>
                    <button className='btn btn-warning'>
                        Sort By Popularity (DSC)
                    </button>
                    <button className='btn btn-warning'>
                        Sort By Rating (ASC)
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    data.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;