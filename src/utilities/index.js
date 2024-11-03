import toast from "react-hot-toast";

// get all coffees from local storage //
const getAllFavourites = () => {
    const all = localStorage.getItem('favourites')
    if (all) {
        const favourites = JSON.parse(all)
        return favourites;
    }
    else {
        return []
    }
}

// add a coffee to local storage //
const addFavourite = coffee => {
    const favourites = getAllFavourites();
    const isExist = favourites.find(item => item.id == coffee.id)
    if (isExist) {
        return toast.error('Already exist')
    }
    favourites.push(coffee)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    toast.success('Successfully Added')
}


// remove a coffee from local storage //
export { addFavourite, getAllFavourites }

