import React, { useState } from "react";
import "./introduce.scss";

const data = [
  {
    id: 1,
    title: "Nhà bếp kiểu Ý",
    desc: `Với các món ăn Ý của chúng tôi được nấu bởi
    đầu bếp chuyên nghiệp, bạn sẽ cảm thấy như thể
    bạn đang ở nhà hàng Ý chính thống. Ôliu
    dầu, cây nho và bánh mì là chìa khóa của
    Nhà bếp kiểu Ý.`,
    active: false,
  },
  {
    id: 2,
    title: "Nhà bếp Mexico",
    desc: `Món Mexico chính hiệu được chế biến tại nhà hàng ngoài trời
    là ngon, tươi và sôi động. Tính năng chính
    ở đây là lạnh - cả khô và tươi. Cũng chính
    nguyên liệu của nhà bếp Mexico là đậu
    và ngô.`,
    active: false,
  },
  {
    id: 3,
    title: "Nhà bếp Việt Nam",
    desc: `Các nhà hàng buffet món Việt bây giờ ở Sài Gòn khá nhiều, 
    nhưng để kiếm được một nhà hàng có món ăn đậm đà, 
    giữ lại nguyên nét Việt mộc mạc trong đó thì mới là khó. 
    Nhà hàng này ban đầu chỉ là một quán bán đồ ăn online nhưng dần được nhiều người 
    biết đến với vị ngon nổi tiếng nên đã trở thành 1 nhà hàng buffet đích thị. 
    Không gian nhà hàng được trang trí khá mộc mạc, bằng chính các vật dụng quen thuộc ngày xưa, 
    những chiếc mẹt nhỏ bé, xinh xinh`,
    active: false,
  },
  {
    id: 4,
    title: "Nhà bếp Ấn Độ",
    desc: `Nói chung, nhà bếp là thành phần quan trọng nhất của ngôi nhà của bạn. 
    Chúng ta thường sử dụng rất nhiều thiết bị khác nhau trong nhà bếp mỗi ngày. 
    Ngoài ra còn có nhiều công việc khó thực hiện và một số công cụ mới mà chúng 
    tôi có thể sử dụng để tiết kiệm rất nhiều thời gian và công sức của chúng tôi. 
    Những thiết bị này tuyệt vời đến nỗi khi bạn nhìn thấy chúng, bạn sẽ cần đến những tiện ích này. 
    Những thiết bị này chắc chắn sẽ sửa đổi phương pháp nấu ăn của bạn và sẽ cải thiện nó.`,
    active: false,
  },
];

const Introduce = () => {
  const [fakeData, setFakeData] = useState(data);

  const handleOpenItem = (payload) => {
    const Copy = [...fakeData].map((item) =>
      item.id === payload.id && !payload.active
        ? {
            ...payload,
            active: true,
          }
        : {
            ...item,
            active: false,
          }
    );

    setFakeData(Copy);
  };

  return (
    <section className="introduce">
      <section className="introduce-image">
        <img
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/restaurant-1170x1122.jpg"
          alt=""
        />
      </section>
      <section className="introduce-content">
        <p className="introduce-content-title">Nhà hàng của chúng tôi</p>
        <p className="introduce-content-subTitle">
          {`Bữa sáng tự chọn được phục vụ trong sảnh khách ở tầng trệt và cả bên ngoài trên sân nhỏ của chúng tôi.`}
        </p>
        <section className="introduce-content-list">
          {fakeData.map((item, index) => {
            return (
              <section key={index}>
                <section
                  className="introduce-content-list-item"
                  onClick={() => handleOpenItem(item)}
                >
                  <p className={item.active ? "item-text active" : "item-text"}>
                    {item.title}
                  </p>
                  <section className="icon">{item.active ? "-" : "+"} </section>
                </section>
                {item.active && (
                  <section className="introduce-content-list-child">
                    <p className="text">{item.desc}</p>
                  </section>
                )}
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Introduce;
