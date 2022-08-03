import {useState, useRef, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { deleteProfile } from '../features/eqSound/eqSlice'

function ProfileDel({ showDel }) {
    const [showDelete, setShowDelete] = useState(true);
    const { listData, activeId } = useSelector((state) => {
        return {
            listData: state.eq.listData,
            activeId: state.eq.activeId,
        };
    });
    const dispatch = useDispatch();

    const delRef = useRef();

    const handleDelete = () => {
        dispatch(deleteProfile(activeId))
        setShowDelete(!showDelete);
    }

    return (
        <div
            id="profileDelCfm"
            className={`profile-del alert flex ${showDel === showDelete? "show" : ""}`}
            ref={delRef}
        >
            <div className="title">delete eq</div>
            <div className="body-text t-center" id="delName">
                {listData[activeId].name}
            </div>
            <div className="thx-btn" id="cfmDelete" onClick={handleDelete}>
                delete
            </div>
        </div>
    );
}

export default ProfileDel;
