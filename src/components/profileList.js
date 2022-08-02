import ProfileName from "./profileName";

function ProfileList({ option = [], onChange, selectedId }) {


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
            <ProfileName />
        </div>
    );
}

export default ProfileList;
