
const Card = ({ coffee }) => {
    const { name, image, category, origin, type, id, rating, popularity } = coffee || {}
    return (
        <div>
            <p>{name}</p>
        </div>
    );
};

export default Card;