import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';

const preventDefault = (e) => {
    e.preventDefault();
}

export const mainListItems = (
    <div>
        {/*홈*/}
        <Link to="/"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItem>
        </Link>

        {/*로그인*/}
        <Link to="/Login"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="로그인" />
            </ListItem>
        </Link>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>컨텐츠</ListSubheader>
        {/*커뮤니티*/}
        <Link to="/Community"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Community" />
            </ListItem>
        </Link>

    </div>
);