import { useSelector, useDispatch } from "react-redux";
import { addProfile } from "../features/eqSound/eqSlice";

function Toolbar() {
    const { listData } = useSelector(state => state.eq.listData);

    const dispatch = useDispatch();

    const handleAddProfile = () => {
        const newProfile = {
            id: listData.length,
            icon: "custom",
            name: "new profile",
        };
        dispatch(addProfile(newProfile));
    };

    return (
        <div className="toolbar flex">
            <div
                className="icon add"
                id="profileAdd"
                onClick={handleAddProfile}
            ></div>
            <div className="icon edit" id="profileEdit"></div>
            <div className="icon delete" id="profileDelete"></div>

            <div className="icon down" id="profileDown"></div>
            <div className="icon up disabled" id="profileUp"></div>
        </div>
    );
}

export default Toolbar;
