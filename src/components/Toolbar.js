import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import {
    addProfile,
    downProfile,
    upProfile,
    deleteProfile,
} from "../features/eqSound/eqSlice";
import ProfileDel from "./profileDel";

function Toolbar({ showEdit }) {
    const [showDelAlert, setShowDelAlert] = useState(false);

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
    const show = listData[getId()].icon;

    const handleAddProfile = () => {
        dispatch(
            addProfile({
                id: nanoid(),
                icon: "custom",
                name: "New profile",
            })
        );
    };

    const handleDown = () => {
        dispatch(downProfile(getId()));
    };

    const handleUp = () => {
        if (getId() - 1 >= 0) {
            dispatch(upProfile(getId()));
        }
    };

    const handleDelete = () => {
        dispatch(deleteProfile(getId()));
    };

    return (
        <>
            <div className="toolbar flex">
                <div
                    className="icon add"
                    id="profileAdd"
                    onClick={handleAddProfile}
                ></div>
                <div
                    className={`icon edit ${show === "custom" ? "show" : ""}`}
                    id="profileEdit"
                    onClick={showEdit}
                ></div>
                <div
                    className={`icon delete ${show === "custom" ? "show" : ""}`}
                    id="profileDelete"
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowDelAlert(true);
                    }}
                ></div>

                <div
                    className={`icon down ${
                        getId() === listData.length - 1 ? "disabled" : ""
                    }`}
                    id="profileDown"
                    onClick={handleDown}
                ></div>
                <div
                    className={`icon up ${getId() === 0 ? "disabled" : ""}`}
                    id="profileUp"
                    onClick={handleUp}
                ></div>
            </div>
            <ProfileDel
                showDel={showDelAlert}
                onConfirm={() => {
                    setShowDelAlert(false);
                    handleDelete();
                }}
                onCancel={() => {
                    setShowDelAlert(false);
                }}
            />
        </>
    );
}

export default Toolbar;
