import { Link, useLocation } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const Card = ({ coffee }) => {
    const { pathname } = useLocation()

    const { name, image, category, origin, type, id, rating, popularity } = coffee || {}
    return (
        <div className="flex relative" >
            <Link
                to={`/coffee/${id}`}
                className='transition  hover:scale-105 shadow-xl rounded-xl overflow-hidden'
            >
                <figure className='w-full h-48 overflow-hidden'>
                    <img className='' src={image} alt='' />
                </figure>
                <div className='p-4'>
                    <h1 className='text-xl'>Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>
            </Link>
            {
                pathname === '/dashboard' && <div className="absolute p-3 bg-warning rounded-full cursor-pointer -top-5 -right-5"><FaTrashAlt size={20} /></div>
            }
        </div>
    );
};

export default Card;