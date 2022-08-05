import { createSlice } from "@reduxjs/toolkit";

export const eqSlice = createSlice({
    name: "eqSound",
    initialState: {
        listData: [
            { id: 0, icon: "default", name: "Default" },
            { id: 1, icon: "game", name: "Game" },
            { id: 2, icon: "movie", name: "Movie" },
            { id: 3, icon: "music", name: "Music" },
            { id: 4, icon: "custom", name: "Custom 1" },
            {
                id: 5,
                icon: "custom",
                name: "Demo long text demo long text demo",
            },
        ],
        activeId: 0,
    },
    reducers: {
        selectedProfile: (state, action) => {
            const id = action.payload;
            return {
                ...state,
                activeId: id,
            };
        },
        addProfile: (state, action) => {
            const id = action.payload.id
            return {
                ...state,
                listData: [...state.listData, action.payload],
                activeId: id,
            };
        },
        editProfile: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        name: newValue,
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },
        deleteProfile: (state, action) => {
            const id = action.payload;
            const listData = [...state.listData];
            listData.splice(id, 1);
            // listData.filter(profile => profile.id !== id)
            const newId = listData[0].id;
            return {
                ...state,
                listData: listData,
                activeId: newId,
            };
        },
        downProfile: (state, action) => {
            const id = action.payload;
            const newProfile = [...state.listData];
            newProfile.splice(id + 2, 0, newProfile[id]);
            newProfile.splice(id, 1);
            return {
                ...state,
                listData: newProfile,
            };
        },
        upProfile: (state, action) => {
            const id = action.payload;
            const newProfile = [...state.listData];
            newProfile.splice(id - 1, 0, newProfile[id]);
            newProfile.splice(id + 1, 1);
            return {
                ...state,
                listData: newProfile,
            };
        },
    },
});

export const {
    selectedProfile,
    addProfile,
    editProfile,
    deleteProfile,
    downProfile,
    upProfile,
} = eqSlice.actions;
export default eqSlice.reducer;
