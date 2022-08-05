function ProfileList({ option = [], onChange, selectedId}) {

    return (
        <>
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
            {/* <input
                id="profileRename"
                className={`profile-item ${show ? "show" : ""}`}
                placeholder="Enter Profile Name"
                defaultValue={valueChange}
                maxLength="25"
                style={{top: getId() * 30}}
                ref={inputRef}
                onBlur={(e) => {
                    changeProfile(e.target.value);
                    onBlur()
                }}
            /> */}
        </>
    );
}

export default ProfileList;
