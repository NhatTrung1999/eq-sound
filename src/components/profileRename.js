import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProfile } from "../features/eqSound/eqSlice";

function ProfileRename({show, onBlur}) {
    const inputRef = useRef();
    const { listData, activeId } = useSelector((state) => {
        return {
            listData: state.eq.listData,
            activeId: state.eq.activeId,
        };
    });

    const dispatch = useDispatch();
    const getId = () => {
        for (let x in listData) {
            if (listData[x].id === activeId) {
                return parseInt(x);
            }
        }
    };

    const valueChange = listData[getId()].name;

    const changeProfile = (name) => {
        const valueChange = { id: activeId, value: name };
        dispatch(editProfile(valueChange));
    };

    useEffect(() => {
        if (show) {
            inputRef.current.value = valueChange;
            inputRef.current.select();
        }
    }, [show, valueChange]);

    if(!show) {
        return null;
    }

    return (
        <input
            id="profileRename"
            className={`profile-item ${show ? "show" : ""}`}
            placeholder="Enter Profile Name"
            defaultValue={valueChange}
            maxLength="25"
            style={{ top: getId() * 30 }}
            ref={inputRef}
            onBlur={(e) => {
                changeProfile(e.target.value);
                onBlur();
            }}
        />
    );
}

export default ProfileRename;
