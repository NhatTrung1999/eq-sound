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
        activeId: 0
    },
    reducers: {
        selectedProfile: (state, action) => {
            const id = action.payload;
            return {
                ...state,
                activeId: id
            }

        },
        addProfile: (state, action) => {
            return {
                ...state,
                listData: [...state.listData, action.payload],
                selectedIndex: state.listData.length,
            };
        },
        editProfile: {},
        deleteProfile: {},
        downProfile: {},
        upProfile: {},
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
