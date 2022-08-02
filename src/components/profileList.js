import { useSelector, useDispatch } from "react-redux";
import ProfileName from "./profileName";
import { selectedProfile } from '../features/eqSound/eqSlice'

function ProfileList() {
    const { listData, activeId } = useSelector((state) => {
        return {
            listData: state.eq.listData,
            activeId: state.eq.activeId,
        };
    });

    const dispatch = useDispatch();

    return (
        <div id="profileList" className="scrollable">
            {listData.map((profile) => (
                <div
                    id={profile.id}
                    className={`profile-item ${profile.id === activeId ? "active" : ''} ${profile.icon} ${profile.icon === 'custom' ? '' : 'no-edit'} `}
                    key={profile.id}
                    onClick={() => {
                        dispatch(selectedProfile(profile.id))
                    }}
                >
                    {profile.name}
                </div>
            ))}
            <ProfileName />
        </div>
    );
}

export default ProfileList;
