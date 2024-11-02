import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading  */}
            <Heading title={'Browse Coffees By Category'} subtitle={'Choose your desire coffee category to browse through specific coffees that fit in your taste'} />
            {/* Categories  */}
            {/* Dynamic Nested Components  */}
        </div>
    );
};

export default Home;