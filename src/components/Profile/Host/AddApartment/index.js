import React, { useContext, useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import "./addApartment.scss"
import AddRoom from '../AddRoom';


const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


const currencies = [
    {
        value: 'hotel',
        label: 'Khách sạn',
    },
    {
        value: 'motel',
        label: 'Nhà nghỉ',
    },
    {
        value: 'resort',
        label: 'Resort',
    },
];


const AddApartment = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [open1, setOpen1] = React.useState(false);

    const handleClose1 = () => {
        setOpen1(false);
    };

    const handleTwoFunction = () => {
        setOpen1(true);
        setOpen(false);
    };

    const [currency, setCurrency] = React.useState('hotel');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    //ảnh
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));


            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }
    };

    const renderPhotos = (source) => {
        return source.map((photo) => {
            return <img className='popup-add-apartment-input-img-result-img' src={photo} alt="" key={photo} />;
        });
    };

    const [formApartment, setFormApartment] = useState({
        numberRoom: 1,
        pictures: "",
    });


    return (
        <>
            <div className='add-apartment'>
                <p onClick={handleClickOpen}>Thêm Apartment</p>
            </div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth maxWidth='md' >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Thêm Apartment
                </DialogTitle>
                <DialogContent dividers>
                    <div className='popup-add-apartment'>
                        <div className='popup-add-apartment-box'>
                            <TextField className='popup-add-apartment-box-name' id="name-apartment" label="Tên apartment" variant="outlined" />
                            <TextField
                                className='popup-add-apartment-box-type'
                                id="outlined-select-currency"
                                select
                                label="Loại apartment"
                                value={currency}
                                onChange={handleChange}
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </div>
                        <div className='popup-add-apartment-box'>
                            <TextField className='popup-add-apartment-box-type' 
                            required id="number-room" label="Số phòng cho thuê" 
                            type={'number'} variant="outlined" 
                            value={formApartment.numberRoom}
                            onChange={(e) =>
                            setFormApartment({ ...formApartment, numberRoom: e.target.value })
                            }
                            />
                            <TextField className='popup-add-apartment-box-rate' id="rating" label="Đánh giá của căn hộ" variant="outlined" />
                        </div>
                        <div className='popup-add-apartment-box'>
                            <TextField className='popup-add-apartment-box-number-room' id="apartment-number" label="Số nhà" variant="outlined" />
                            <TextField className='popup-add-apartment-box-street' id="street" label="đường" variant="outlined" />
                        </div>
                        <div className='popup-add-apartment-box'>
                            <TextField className='popup-add-apartment-box-one' id="district" label="quận\huyện" variant="outlined" />
                            <TextField className='popup-add-apartment-box-one' id="province" label="tỉnh\thành phố" variant="outlined" />
                            <TextField className='popup-add-apartment-box-one' id="country" label="Quốc gia" variant="outlined" />
                        </div>
                        <TextField className='popup-add-apartment-description' multiline rows={5} id="description" label="Mô tả căn hộ" variant="outlined" />

                        <div className='popup-add-apartment-input-img'>
                            <input className='popup-add-apartment-input-img-input' type="file" id="file" multiple onChange={handleImageChange} />
                            <div className="popup-add-apartment-input-img-label-holder">
                                <label htmlFor="file" className="popup-add-apartment-input-img-label-holder-label">
                                    <i className="material-icons">Thêm hình</i>
                                </label>
                            </div>
                            <div className="popup-add-apartment-input-img-result">{renderPhotos(selectedFiles)}</div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>

                    <Button autoFocus onClick={handleClose} >
                        Đóng
                    </Button>

                    <Button autoFocus onClick={handleTwoFunction} color="primary" >
                        Tiếp
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog onClose={handleClose1} aria-labelledby="customized-dialog-title" open={open1} fullWidth maxWidth='md' >
                <DialogTitle id="customized-dialog-title" onClose={handleClose1}>
                    Thêm phòng
                </DialogTitle>
                <DialogContent dividers>
                    {[...Array(formApartment.numberRoom)].map((item, index) =>
                        <div className='popup-add-room'>
                            <h2 className='popup-add-room-title'>Phòng {index+1}</h2>
                            <AddRoom key={index} />
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose1} >
                        Thêm apartment
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddApartment