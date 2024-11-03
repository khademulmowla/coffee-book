import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavourites, removeFavourite } from "../utilities";
import Card from "../components/Card";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const favourites = getAllFavourites()
        setCoffees(favourites)
    }, [])
    const handleRemove = (id) => {
        removeFavourite(id)
        const favourites = getAllFavourites()
        setCoffees(favourites)
    }
    return (
        <>
            <Heading title="Welcome to Dashboard" subtitle="Manage coffees that you have previously added as favourit.
            You can view or remove them from here."></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    coffees.map(coffee => <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Dashboard;