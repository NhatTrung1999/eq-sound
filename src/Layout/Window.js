import {useSelector} from 'react-redux'

function Window() {

    const { listData, activeId } = useSelector((state) => {
        return {
            listData: state.eq.listData,
            activeId: state.eq.activeId,
        };
    });

    return (
        <div className="thx-window">
            <div className="sub-title flex">
                <h1 id="eqTitle" className="eq-title">
                    {listData[activeId].name}
                </h1>
            </div>
        </div>
    );
}

export default Window;
