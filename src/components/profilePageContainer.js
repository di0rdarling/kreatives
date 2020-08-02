import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles, IconButton, Tooltip, Typography } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Public';
import SearchIcon from '@material-ui/icons/Search';
import MentorIcon from '@material-ui/icons/School';
import MessageIcon from '@material-ui/icons/Telegram';
import Avatar from '../images/avatar-icon-2.jpg';
import BackgroundImage from '../images/iron-man.jpg';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '100%'
    },
    main: {
        width: '100%'
    },
    sidebar: {
        width: 70,
        backgroundColor: '#26081C',
        height: '100vh',
        paddingLeft: 12,
        zIndex: 1
    },
    icon: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
        color: '#858786',
        fontSize: 35
    },
    iconActive: {
        marginLeft: 6,
        marginRight: 'auto',
        marginTop: 50,
        color: '#858786',
        backgroundColor: '#153131',
        fontSize: 35
    },
    body: {
        width: '100%'
    },
    heading: {
        fontSize: 100,
    },
    header: {
        backgroundSize: 'cover',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: 'center',
        height: 400
    },
    headerImage: {
        width: '1200px',
        height: '400px',
        zIndex: -1
    },
    profilePicture: {
        borderRadius: '50%',
        height: 250,
        marginBottom: 16,
        margin: '16px 0px'
    },
    profileDetails: {
        textAlign: 'center',
    },
    profileDetailsText: {
        // color: 'white'
    },
})

function App() {

    let classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.sidebar}>
                <Tooltip title='Profile'>
                    <IconButton className={classes.iconActive}>
                        <PersonIcon ontSize='inherit' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Explore'>
                    <IconButton className={classes.icon}>
                        <ExploreIcon fontSize='inherit' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Mentor'>
                    <IconButton className={classes.icon}>
                        <MentorIcon fontSize='inherit' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Messages'>
                    <IconButton className={classes.icon}>
                        <MessageIcon fontSize='inherit' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Search'>
                    <IconButton className={classes.icon}>
                        <SearchIcon fontSize='inherit' />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Logout'>
                    <IconButton className={classes.icon}>
                        <SettingsIcon fontSize='inherit' />
                    </IconButton>
                </Tooltip>
            </div>
            <div className={classes.main}>
                <div className={classes.header}>
                    <div className={classes.profileDetails}>
                        <img className={classes.profilePicture} src={Avatar} alt='profile-picture' />
                        <div className={classes.body}>
                            <Typography className={classes.profileDetailsText}>John Doe</Typography>
                            <Typography className={classes.profileDetailsText}>I enjoy making music, writing and singing!</Typography>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
