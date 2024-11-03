import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavourites } from "../utilities";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
    const location = useLocation()
    console.log(location)
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const favourites = getAllFavourites()
        setCoffees(favourites)
    }, [])
    return (
        <>
            <Heading title="Welcome to Dashboard" subtitle="Manage coffees that you have previously added as favourit.
            You can view or remove them from here."></Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Dashboard;