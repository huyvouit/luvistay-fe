import React, { useState } from 'react';
import BoxLeft from '../../components/Blog/BoxLeft'
import Posts from '../../components/Blog/Posts'
import "./blog.scss"
import avatar from "../../assets/images/profile.png"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const BlogPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log('source: ', source);
    return source.map((photo) => {
      return <img className='create-posts-input-img-result-img' src={photo} alt="" key={photo} />;
    });
  };


  return (
    <div className='blog'>
      <div className='blog-container'>
        <div className='blog-container-colum-one'>
          <BoxLeft />
        </div>
        <div className='blog-container-colum-two'>
          <div className='blog-container-colum-two-posts'>
            <div className='blog-container-colum-two-posts-box'>
              <img src={avatar} className='blog-container-colum-two-posts-box-img' />
              <p onClick={handleClickOpen} className='blog-container-colum-two-posts-box-title'>Huy ơi, Bạn đang nghĩ gì thế?</p>
            </div>
            <p onClick={handleClickOpen} className='blog-container-colum-two-posts-text'>Tạo blog</p>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogContent>
                <div className='create-posts'>
                  <div className='create-posts-box-information'>
                    <img src={avatar} className='create-posts-box-information-img' />
                    <h3 className='create-posts-box-information-name'>Võ Sỹ Huy</h3>
                  </div>
                  <textarea className='create-posts-input-content' placeholder='Huy ơi, bạn đang nghĩ gì đó?' />
                  <div className='create-posts-input-img'>
                    <input className='create-posts-input-img-input' type="file" id="file" multiple onChange={handleImageChange} />
                    <div className="create-posts-input-img-label-holder">
                      <label htmlFor="file" className="create-posts-input-img-label-holder-label">
                        <i className="create-posts-input-img-label-holder-material-icons">Thêm Hình</i>
                      </label>
                    </div>
                    <div className="create-posts-input-img-result">{renderPhotos(selectedFiles)}</div>
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Hủy
                </Button>
                <Button onClick={handleClose} color="primary">
                  Đăng bài
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </div>
      </div>
    </div>
  )
}

export default BlogPage