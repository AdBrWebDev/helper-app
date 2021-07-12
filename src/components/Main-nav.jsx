import React, {useState} from 'react';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function MainNav(){
    const [type, setType] = useState('');

    const handleChange = (newValue) => {
        setType(newValue);
      };

    return (
      <BottomNavigation value={type} onChange={handleChange} className="position-fixed top-0 row w-100">
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} className="col-6" />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} className="col-6" />
      </BottomNavigation>
      )
}