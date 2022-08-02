import ProfileList from './profileList';
import Toolbar from './Toolbar'
import ProfileDel from './profileDel';

function DrawerSelect() {
    return (
        <div id="profileWrapper" className="drawer-select flex">
            <ProfileList />
            <Toolbar />
            <ProfileDel />
        </div>
    );
}

export default DrawerSelect;