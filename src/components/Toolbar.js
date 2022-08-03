import { useSelector, useDispatch } from "react-redux";
import { addProfile, downProfile, upProfile } from "../features/eqSound/eqSlice";

function Toolbar({ showEdit, showDel }) {
    const { listData, activeId } = useSelector((state) => {
        return {
            listData: state.eq.listData,
            activeId: state.eq.activeId,
        };
    });

    const dispatch = useDispatch();
    const show = listData.find((profile) => profile.id === activeId).icon;

    const handleAddProfile = () => {
        const newProfile = {
            id: listData.length,
            icon: "custom",
            name: "New profile",
        };
        dispatch(addProfile(newProfile));
    };

    
    const handleDown = () => {
        dispatch(downProfile(activeId));
    };

    const handleUp = () => {
        dispatch(upProfile(activeId));
    };


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
                onClick={showEdit}
            ></div>
            <div
                className={`icon delete ${show === "custom" ? "show" : ""}`}
                id="profileDelete"
                onClick={showDel}
            ></div>

            <div
                className={`icon down ${
                    activeId === listData.length - 1 ? "disabled" : ""
                }`}
                id="profileDown"
                onClick={handleDown}
            ></div>
            <div
                className={`icon up ${activeId === 0 ? "disabled" : ""}`}
                id="profileUp" onClick={handleUp}
            ></div>
        </div>
    );
}

export default Toolbar;
