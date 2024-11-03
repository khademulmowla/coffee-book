import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from '../assets/nutrition.png'
import { addFavourite, getAllFavourites } from "../utilities";

const CoffeeDetail = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [coffee, setCoffee] = useState({})
    const [isFavourite, setIsFavourite] = useState(false)
    useEffect(() => {
        const singleData = data.find(coffee => coffee.id == id)
        setCoffee(singleData)
        const favourites = getAllFavourites();
        const isExist = favourites.find(item => item.id == singleData.id)
        if (isExist) {
            setIsFavourite(true)
        }
    }, [data, id])
    const {
        name,
        image,
        ingredients,
        nutrition_info,
        description,
        making_process,
        rating,
        popularity,
    } = coffee

    const handleFavorite = coffee => {
        addFavourite(coffee)
        setIsFavourite(true)
    }

    return (
        <div className='my-12'>
            {/* Description */}
            <h1 className='text-2xl md:text-4xl font-thin mb-6'>{description}</h1>
            {/* Image */}
            <div className='w-full h-full md:h-[500px] object-cover overflow-hidden rounded-xl shadow-xl'>
                <img className='w-full h-full' src={image} alt='' />
            </div>
            {/* Title and Favorite Button */}
            <div className='flex justify-between items-center my-6'>
                <div>
                    <h1 className='text-2xl md:text-3xl font-thin'>{name}</h1>
                    <p className='text-base'>Popularity: {popularity}</p>
                    <p className='text-base'>Rating: {rating}</p>
                </div>
                <div>
                    <button disabled={isFavourite} onClick={() => handleFavorite(coffee)}
                        className='btn btn-warning'>
                        Add Favorite
                    </button>
                </div>
            </div>
            {/* Making Process */}
            <div className='my-6'>
                <h2 className='text-2xl font-thin'>Making Process:</h2>
                <p className='text-base '>{making_process}</p>
            </div>

            <div className='my-6 flex justify-between items-center'>
                <div className='flex-1'>
                    <div className='flex flex-col justify-center gap-6'>
                        <h1 className='text-2xl font-thin'>Ingredients:</h1>
                        <ul className='text-xl ml-12'>
                            {ingredients &&
                                ingredients.map((item, index) => (
                                    <li className='list-disc' key={index}>
                                        {item}
                                    </li>
                                ))}
                        </ul>
                        <h1 className='text-2xl font-thin'>Nutrition:</h1>
                        <ul className='text-xl ml-12'>
                            {nutrition_info &&
                                Object.keys(nutrition_info).map((n, i) => (
                                    <li className='list-disc' key={i}>
                                        {n}: {nutrition_info[n]}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
                <div className='flex-1'>
                    <img src={nutritionImg} alt='' />
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetail;