import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

function ProfileDel({ showDel, onCancel, onConfirm }) {
    const { listData, activeId } = useSelector((state) => {
        return {
            listData: state.eq.listData,
            activeId: state.eq.activeId,
        };
    });
    const getId = () => {
        for (let x in listData) {
            if (listData[x].id === activeId) {
                return parseInt(x);
            }
        }
    };

    const delRef = useRef();

    useEffect(() => {
        const event = (e) => {
            if (showDel && !delRef.current.contains(e.target)) {
                onCancel && onCancel();
            }
        };

        window.addEventListener("click", event);

        return () => window.removeEventListener("click", event);
    }, [showDel, onCancel]);

    return (
        <div
            id="profileDelCfm"
            className={`profile-del alert flex ${showDel ? "show" : ""}`}
            ref={delRef}
        >
            <div className="title">delete eq</div>
            <div className="body-text t-center" id="delName">
                {listData[getId()].name}
            </div>
            <div
                className="thx-btn"
                id="cfmDelete"
                onClick={() => onConfirm && onConfirm()}
            >
                delete
            </div>
        </div>
    );
}

export default ProfileDel;
