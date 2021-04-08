import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import ModalDetails from './ModalDetails';

const TableContent =(obj)=>{
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <>
            <TableRow id="row">
                <TableCell onClick={handleOpen} align="center">{obj.pickUpName}</TableCell>
                <TableCell onClick={handleOpen} align="center">{obj.pickUpLocation}</TableCell>
                <TableCell onClick={handleOpen} align="center">{obj.deliveryName}</TableCell>
                <TableCell onClick={handleOpen} align="center">{obj.deliveryLocation}</TableCell>
                <TableCell onClick={handleOpen} align="center">{obj.packageWeight}</TableCell>
                <TableCell onClick={handleOpen} align="center">{obj.dimensionsType}</TableCell>
                <TableCell><Button variant="contained" color="primary">Print</Button></TableCell>
                <TableCell><Button variant="contained" color="secondary">Show</Button></TableCell>
            </TableRow>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title" align="center">Order Details</h2>
                    <ModalDetails {...obj} />
                </div>
                </Fade>
            </Modal>
        </>
    );
}

export default TableContent;