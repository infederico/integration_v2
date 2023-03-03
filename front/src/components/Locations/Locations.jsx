import { useEffect } from "react";
import { getAllLocations } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";


const Locations = () => {

    const locations = useSelector((state) => state.allLocations.results);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLocations());
    }, []);

    return (
        <div>
            <h2>locations component</h2>
        </div>
    );
};

export default Locations;