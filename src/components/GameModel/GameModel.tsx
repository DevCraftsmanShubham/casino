import classes from '*.module.css';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  Slide,
  Theme,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { FC, forwardRef } from 'react';
import { connect } from 'react-redux';
import {
  GameAction,
  IGameAction,
  ResetGameState,
} from '../../redux/Actions/GameAction';
import { AddBalanceAction, DeductBalanceAction,  } from '../../redux/Actions/UserAction';
import Slot from './Slot';

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface IModelProps {
  open: boolean;
  handleClose: () => void;
  slotsValue?: any;
  upadateSlotValue: (payload: IGameAction) => void;
  resetSlots: () => void;
  deductBalance: (balance: number) => void;
  balance: any;
  addBalance: (balance: number) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  slotsContaier: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));
let count = 0;
const GameModel: FC<IModelProps> = ({
  open,
  handleClose,
  slotsValue,
  upadateSlotValue,
  resetSlots,
  deductBalance,
  balance,
  addBalance
}) => {
  const classes = useStyles();
  function areEqual(f: number, s: number, t: number){
    var len = arguments.length;
    for (var i = 1; i< len; i++){
       if (arguments[i] === null || arguments[i] !== arguments[i-1])
          return false;
    }
    return true;
 }
  const playBtn = () => {
    if (count === 0) {
      deductBalance(1);
    }
    count += 1;
    const value = Math.floor(Math.random() * 9) + 1;
    upadateSlotValue({
      slotNumber: count,
      value,
    });

    if(count === 3) {
        const { slot1, slot2, slot3 } = slotsValue;
        if(slot1 === 7 && slot2 === 7  && slot3 === 7) return addBalance(10);
        if(slot1 === slot2 || slot2 === slot3 || slot3 === slot1 ) {
            console.log('true')
            addBalance(0.5)
        }
    }
  };

  const reset = () => {
    count = 0;
    resetSlots();
  };

  return (
    <Dialog
      fullWidth
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{'Game Begins'}</DialogTitle>
      <DialogContent>
        <DialogContentText>Press Button to Begin</DialogContentText>
        <div className={classes.slotsContaier}>
          <Slot val={slotsValue.slot1} />
          <Slot val={slotsValue.slot2} />
          <Slot val={slotsValue.slot3} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={reset} color="primary">
          Reset
        </Button>
        <Button onClick={playBtn} color="primary" disabled={count === 3}>
          Play
        </Button>
        <Button
          onClick={() => {
            count = 0;
            handleClose();
          }}
          color="primary"
        >
          Debug
        </Button>
        <Button
          onClick={() => {
            count = 0;
            handleClose();
          }}
          color="primary"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state: any) => {
  return {
    slotsValue: state.gameState,
    balance: state.balance,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    upadateSlotValue: (payload: IGameAction) => dispatch(GameAction(payload)),
    resetSlots: () => dispatch(ResetGameState()),
    deductBalance: (balance: number) =>
      dispatch(DeductBalanceAction(balance)),
      addBalance: (balance: number) => dispatch(AddBalanceAction(balance))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameModel);
