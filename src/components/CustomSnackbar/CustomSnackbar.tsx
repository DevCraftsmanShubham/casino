import { Snackbar } from '@material-ui/core';
import { Component, createRef } from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

export const snackbarRef = createRef<CustomSnackbar>();

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface IMessageProps {
  message: string;
  severity: 'error' | 'success' | 'warning' | 'info';
}

export const showMessage = (props: IMessageProps) => {
  if (snackbarRef.current) {
    snackbarRef.current.showMessage(props);
  }
};

interface ISnackbarState {
  isOpen: boolean;
  severity: 'error' | 'success' | 'warning' | 'info';
  message: string;
}

class CustomSnackbar extends Component<{}, ISnackbarState> {
  state: ISnackbarState = {
    isOpen: false,
    severity: 'error',
    message: '',
  };

  showMessage = (props: IMessageProps) => {
    this.setState({
      isOpen: true,
      severity: props.severity,
      message: props.message,
    });
  };

  handleClose = () => {
    this.setState({ isOpen: false, message: '' });
  };

  render() {
    const { isOpen, message, severity } = this.state;
    return (
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        <Alert onClose={this.handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    );
  }
}

export default CustomSnackbar;
