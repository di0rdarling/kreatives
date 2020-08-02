import React from 'react';
import { makeStyles } from '@material-ui/core';
import ProfilePageContainer from './components/profilePageContainer';

const useStyles = makeStyles({

  root: {
    display: 'flex',
  }
})

function App() {

  let classes = useStyles();

  return (
    <div className={classes.root}>
      <ProfilePageContainer />
    </div>
  );
}

export default App;
