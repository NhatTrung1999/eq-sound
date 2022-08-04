import { useSelector, useDispatch } from "react-redux";
import { selectedProfile } from "../features/eqSound/eqSlice";
import ProfileList from "./profileList";
import Toolbar from "./Toolbar";
import { useState } from "react";

function DrawerSelect() {
    const [on, setOn] = useState(false);
    const showEdit = () => {
        setOn(!on);
    };

    const { listData, activeId } = useSelector((state) => {
        return {
            listData: state.eq.listData,
            activeId: state.eq.activeId,
        };
    });

    const dispatch = useDispatch();


    const selectedChange = (id) => {
        dispatch(selectedProfile(id));
    };

    return (
        <div id="profileWrapper" className="drawer-select flex">
            <ProfileList
                option={listData}
                selectedId={activeId}
                onChange={selectedChange}
                show={on}
                onBlur={() => setOn(false)}
            />
            <Toolbar showEdit={showEdit} />
        </div>
    );
}

export default DrawerSelect;
