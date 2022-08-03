import { useSelector, useDispatch } from "react-redux";
import { selectedProfile } from "../features/eqSound/eqSlice";
import ProfileList from "./profileList";
import Toolbar from "./Toolbar";
import ProfileDel from "./profileDel";
import { useState } from "react";

function DrawerSelect() {
    const [on, setOn] = useState(false);
    const [showDel, setShowDel] = useState(false);

    const showEdit = () => {
        setOn(!on);
    };

    const showDelete = () => {
        setShowDel(!showDel)
    }

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
            />
            <Toolbar showEdit={showEdit} showDel={showDelete} />
            <ProfileDel showDel={showDel}/>
        </div>
    );
}

export default DrawerSelect;
