import { makeStyles, Theme, Typography } from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  slot: {
      height: "30%",
      width: "10%",
      borderWidth: 1,
      borderColor: '#000',
      borderStyle:"solid", 
      display: 'flex',
      alignItems:'center',
      justifyContent: 'center'
  },
}));

interface ISlotProps {
    val: number;
}
const Slot: FC<ISlotProps>= ({ val}) => {
  const classes = useStyles();
  return <div className={classes.slot}>
      <Typography variant="h3" style={{ fontSize: 110}} align="center">
          {val}
      </Typography>
  </div>;
};

export default Slot;
