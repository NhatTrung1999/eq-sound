import { useSelector, useDispatch } from "react-redux";
import { addProfile } from "../features/eqSound/eqSlice";

function Toolbar() {
    const { listData, activeId } = useSelector((state) => {
        return {
            listData: state.eq.listData,
            activeId: state.eq.activeId,
        };
    });

    const dispatch = useDispatch();

    const handleAddProfile = () => {
        const newProfile = {
            id: listData.length,
            icon: "custom",
            name: "New profile",
        };
        dispatch(addProfile(newProfile));
    };

    const show = listData.find((profile) => profile.id === activeId).icon;

    return (
        <div className="toolbar flex">
            <div
                className="icon add"
                id="profileAdd"
                onClick={handleAddProfile}
            ></div>
            <div
                className={`icon edit ${show === "custom" ? "show" : ""}`}
                id="profileEdit"
            ></div>
            <div
                className={`icon delete ${show === "custom" ? "show" : ""}`}
                id="profileDelete"
            ></div>

            <div className="icon down" id="profileDown"></div>
            <div className="icon up disabled" id="profileUp"></div>
        </div>
    );
}

export default Toolbar;
