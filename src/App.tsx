import { Button, makeStyles, Theme } from '@material-ui/core';
import Main from './components/Main/Main';
import { useState } from 'react';
import ResultTable from './components/ResultTable/Table';
import GameModel from './components/GameModel/GameModel';

const userStyles = makeStyles((theme: Theme) => ({
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(4),
  },
  startBtn: {
    width: '20%',
    marginTop: theme.spacing(4),
    alignSelf: 'center',
    padding: 15,
    borderRadius: 150,
  },
}));

function App() {
  const classes = userStyles();
  const [showModel, setModel] = useState<boolean>(false);

  const _startGame = () => {
    setModel(true);
  };
  const _closeModel = () => {
    setModel(false);
  };
  return (
    <Main>
      <GameModel open={showModel} handleClose={_closeModel} />
      <div className={classes.contentContainer}>
        <ResultTable />
        <Button
          color="primary"
          className={classes.startBtn}
          variant="contained"
          onClick={_startGame}
        >
          Start Game
        </Button>
      </div>
    </Main>
  );
}

export default App;
