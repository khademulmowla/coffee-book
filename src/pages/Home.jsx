import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading  */}
            <Heading title={'Browse Coffees By Category'} subtitle={'Choose your desire coffee category to browse through specific coffees that fit in your taste'} />
            {/* Categories  */}
            <Categories categories={categories}></Categories>
            {/* Dynamic Nested Components  */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;