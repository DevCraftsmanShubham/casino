import {
  AppBar,
  Avatar,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { FC, useEffect } from 'react';
import { connect } from 'react-redux';
//@ts-ignore
import logo from '../../assets/chip-casino.png';
//@ts-ignore
import avatar from '../../assets/user.png';
import { UserAction } from '../../redux/Actions/UserAction';
import { IUserState } from '../../redux/Reducers/UserReducer';
import { showMessage } from '../CustomSnackbar/CustomSnackbar';

interface IMainProps {
  children?: any;
  userState: IUserState;
  userStateUpdate: (payload: any) => void;
  balance: any;
}

const useStyles = makeStyles({
  logo: {
    height: 60,
    width: 80,
  },
  appBar: {
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '15%',
    justifyContent: 'space-around',
  },
});

const Main: FC<IMainProps> = ({
  children,
  userState,
  userStateUpdate,
  balance,
}) => {
  const classes = useStyles();
 
  const login = () => {
    const userName = window.prompt('Enter Name: ');
    if (!userName)
      return showMessage({
        message: 'Name Required',
        severity: 'error',
      });

    userStateUpdate({
      isLoggedIn: true,
      userName,
    });
  };

  const _renderUser = () => {
    return (
      <div className={classes.avatarContainer}>
        <Typography variant="h5">$ {balance.balance}</Typography>
        {userState.isLoggedIn ? (
          <Avatar src={avatar} />
        ) : (
          <Button color="primary" variant="contained" onClick={login}>
            Login
          </Button>
        )}
      </div>
    );
  };

  return (
    <div>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <img src={logo} className={classes.logo} />
        {_renderUser()}
      </AppBar>
      {children}
      <div></div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userState: state.user,
    balance: state.balance,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    userStateUpdate: (payload: IUserState) => dispatch(UserAction(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
