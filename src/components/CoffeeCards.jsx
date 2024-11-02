import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const data = useLoaderData()
    const { category } = useParams()
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const filteredByCategory = [...data].filter(coffee => coffee.category === category)
        setCoffees(filteredByCategory)
    }, [category, data])
    console.log(category)
    console.log(data)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
    );
};

export default CoffeeCards;