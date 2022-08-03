import { useRef, useCallback, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { editProfile } from '../features/eqSound/eqSlice'

function ProfileList({ option = [], onChange, selectedId, show}) {
    const ref = useRef();
    const inputRef = useRef();
    const { listData, activeId } = useSelector((state) => {
        return {
            listData: state.eq.listData,
            activeId: state.eq.activeId,
        };
    });

    const dispatch = useDispatch();

    const changeEditProfile = useCallback(() => {
        inputRef.current.value = ref.current.innerText;
        inputRef.current.style.top = ref.current.offsetTop +'px';
        inputRef.current.focus();
        inputRef.current.select();
    }, [inputRef, ref])
            
    useEffect(() => {
        changeEditProfile();
    }, [changeEditProfile])

    const changeProfile = (name) => {
        const valueChange = { id: activeId, value: name };
        dispatch(editProfile(valueChange));
    };

    const valueChange = listData.find(profile => profile.id === activeId).name

    return (
        <div id="profileList" className="scrollable" >
            
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
                    ref={ref}
                >
                    {profile.name}
                </div>
            ))}
            <input
                id="profileRename"
                className={`profile-item ${show ? 'show' : ''}`}
                placeholder="Enter Profile Name"
                value={valueChange}
                maxLength="25"
                ref={inputRef}
                onChange={e => changeProfile(e.target.value)}
            />
        </div>
    );
}

export default ProfileList;
