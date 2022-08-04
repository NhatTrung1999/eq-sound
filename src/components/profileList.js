import { useRef, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProfile } from "../features/eqSound/eqSlice";

function ProfileList({ option = [], onChange, selectedId, show, onBlur }) {
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
    const changeEditProfile = useCallback(() => {
        inputRef.current.value = listData[getId()].name;
        inputRef.current.style.top = listData[getId()].id * 30 + "px";
        inputRef.current.focus();
        inputRef.current.select();
    }, [inputRef, getId, valueChange]);

    useEffect(() => {
        changeEditProfile();
    }, [changeEditProfile]);

    const changeProfile = (name) => {
        const valueChange = { id: activeId, value: name };
        dispatch(editProfile(valueChange));
    };

    return (
        <div id="profileList" className="scrollable">
            {option.map((profile) => (
                <div
                    id={profile.id}
                    className={`profile-item ${
                        profile.id === selectedId ? "active" : ""
                    } ${profile.icon} ${
                        profile.icon === "custom" ? "" : "no-edit"
                    } `}
                    key={profile.id}
                    onClick={() => {
                        onChange(profile.id);
                    }}
                >
                    {profile.name}
                </div>
            ))}
            <input
                id="profileRename"
                className={`profile-item ${show ? "show" : ""}`}
                placeholder="Enter Profile Name"
                defaultValue={valueChange}
                maxLength="25"
                ref={inputRef}
                onBlur={(e) => {
                    changeProfile(e.target.value);
                    onBlur()
                }}
            />
        </div>
    );
}

export default ProfileList;
