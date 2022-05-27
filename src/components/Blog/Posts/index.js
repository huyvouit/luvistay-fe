import React, { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import "./posts.scss";

const imgs = [
  "https://images.unsplash.com/photo-1585255318859-f5c15f4cffe9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1584226761916-3fd67ab5ac3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1585179292338-45ba1f62f082?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1584753987666-ead137ec0614?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1584691267914-91c0bee55964?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1585084335487-f653d0859c14?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://images.unsplash.com/photo-1583217874534-581393fd5325?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixlib=rb-1.2.1&q=80&w=500",
  "https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/06/superior-double-room-992x992.jpg",
];

const Posts = ({ blog }) => {
  const [seen, setSeen] = useState(true);
  const checkSeen = () => setSeen(!seen);

  const [like, setLike] = useState(false);
  const checkLike = () => setLike(!like);

  const [comment, setComment] = useState(false);
  const checkComment = () => setComment(!comment);

  return (
    <div className="posts">
      <div className="posts-container">
        <div className="posts-container-user">
          <img className="posts-container-user-img" src={imgs[0]} alt="" />
          <div className="posts-container-user-information">
            <h2 className="posts-container-user-information-name">
              {blog?.author?.username}
            </h2>
            <p className="posts-container-user-information-time">
              12 phút trước
            </p>
          </div>
        </div>
        <p className="posts-container-title">
          <span
            className={
              seen
                ? "posts-container-title-content-show"
                : "posts-container-title-content-hide"
            }
          >
            {blog?.content}
          </span>{" "}
          {blog?.content.length > 300 && (
            <span
              className="posts-container-title-btn"
              onClick={() => checkSeen(!seen)}
            >
              {seen ? "Đọc tiếp" : "Ẩn bớt"}
            </span>
          )}
        </p>
        <SRLWrapper>
          <div className="posts-container-img">
            {blog?.pictures.map((item, index) => {
              if (imgs.length === 1) {
                return <img className="posts-container-img-one" src={item} />;
              } else if (imgs.length === 2) {
                return <img className="posts-container-img-two" src={item} />;
              } else if (imgs.length === 3) {
                return <img className="posts-container-img-three" src={item} />;
              } else {
                if (index < 2) {
                  return (
                    <img className="posts-container-img-three" src={item} />
                  );
                } else if (index === 2) {
                  return (
                    <div className="posts-container-img-three">
                      <img
                        className="posts-container-img-three-img"
                        src={item}
                        alt=""
                      />
                      <p className="posts-container-img-three-number">
                        +{imgs.length - 3}
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <img
                      className="posts-container-img-hide"
                      src={item}
                      alt=""
                    />
                  );
                }
              }
            })}
          </div>
        </SRLWrapper>
        <div className="posts-container-report">
          <div className="posts-container-report-box">
            <h3
              onClick={() => checkLike(!like)}
              className={
                like
                  ? "posts-container-report-box-btn-like"
                  : "posts-container-report-box-btn"
              }
            >
              Thích
            </h3>
            <p className="posts-container-report-box-number">13</p>
          </div>
          <div className="posts-container-report-box">
            <h3
              className="posts-container-report-box-btn"
              onClick={() => checkComment(!comment)}
            >
              Bình luận
            </h3>
            <p className="posts-container-report-box-number">7</p>
          </div>
        </div>

        <div
          className={
            comment ? "posts-container-cmt" : "posts-container-cmt-hide"
          }
        >
          <div className="posts-container-cmt-container">
            <img className="posts-container-cmt-container-img" src={imgs[1]} />
            <input
              className="posts-container-cmt-container-input"
              placeholder="Viết bình luận..."
            />
            <button className="posts-container-cmt-container-btn">Gửi</button>
          </div>

          {/* show comment ở đây lặp cái này */}
          <div className="posts-container-cmt-container">
            <img className="posts-container-cmt-container-img" src={imgs[1]} />
            <div className="posts-container-cmt-container-box">
              <div className="posts-container-cmt-container-box-information">
                <h4 className="posts-container-cmt-container-box-information-name">
                  Huy
                </h4>
                <p className="posts-container-cmt-container-box-information-time">
                  7 phút trước
                </p>
              </div>
              <p className="posts-container-cmt-container-box-description">
                Như vầy được chưa
              </p>
            </div>
          </div>

          <div className="posts-container-cmt-container">
            <img className="posts-container-cmt-container-img" src={imgs[1]} />
            <div className="posts-container-cmt-container-box">
              <div className="posts-container-cmt-container-box-information">
                <h4 className="posts-container-cmt-container-box-information-name">
                  Huy
                </h4>
                <p className="posts-container-cmt-container-box-information-time">
                  7 phút trước
                </p>
              </div>
              <p className="posts-container-cmt-container-box-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                tincidunt eget nullam non. Quis hendrerit dolor magna eget est
                lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet
                massa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
