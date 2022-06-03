import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.scss";

const founders = [
  {
    name: "Võ Sỹ Huy",
    avatar:
      "https://res.cloudinary.com/decscyfze/image/upload/v1654242024/Avatar/huy_wfz1x4.jpg",
    position: "Project Manager",
  },
  {
    name: "Nguyễn Trà Vi",
    avatar:
      "https://res.cloudinary.com/decscyfze/image/upload/v1654242169/Avatar/phat_zvfkeo.jpg",
    position: "Frontend Developer",
  },
  {
    name: "Nguyễn Ngọc Khôi",
    avatar:
      "https://res.cloudinary.com/decscyfze/image/upload/v1654242014/Avatar/khoi_nguyen_q7xxda.jpg",
    position: "Frontend Developer",
  },
  {
    name: "Nguyễn Trọng Phát",
    avatar:
      "https://res.cloudinary.com/decscyfze/image/upload/v1654242210/Avatar/vi_zsilo8.jpg",
    position: "Frontend Developer",
  },
  {
    name: "Nguyễn Khuê",
    avatar:
      "https://res.cloudinary.com/decscyfze/image/upload/v1654242298/Avatar/Khue_bkbl9a.jpg",
    position: "Backend Leader",
  },
  {
    name: "Lê Khôi",
    avatar:
      "https://res.cloudinary.com/decscyfze/image/upload/v1654242015/Avatar/le_khoi_tr8ydz.jpg",
    position: "Backend Developer",
  },
  {
    name: "Nguyễn Hữu Long",
    avatar:
      "https://res.cloudinary.com/decscyfze/image/upload/v1654242167/Avatar/Long_cvzpgp.jpg",
    position: "Backend Developer",
  },
];

const AboutUsPage = () => {
  return (
    <>
      <div className="about-header-bg h-[35rem] w-full "></div>
      <section className="flex flex-col pt-14 justify-center px-20 mb-10 leading-6 tracking-wide">
        <SectionOne />
        <SectionImage
          fsrc="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-1-1-1024x1024.jpg"
          ssrc="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-2-1-1024x1024.jpg"
        />
        <SectionTwo />
        <SectionThree />
      </section>
      <div className="px-4">
        <hr className="mt-12 mb-0.5" />
        <hr className="mb-8" />
      </div>
      <Founders />
    </>
  );
};

const SectionOne = () => (
  <div className="flex flex-row justify-between pt-8 pb-10">
    <section className="basis-1/2">
      <div className="h-20 flex flex-col justify-around">
        <div className="w-12 sm:w-14 bg-primary h-[0.2rem]" />
        <h6 className="text-lg about-review">
          Luôn mang đến trải nghiệm tốt nhất
        </h6>
        <h3 className="text-2xl about-title">Chào mừng đến với LuviStay</h3>
      </div>
    </section>
    <section className="basis-1/2 space-y-2 text-base">
      <p className="about-description">
        Bạn đang gặp khó khăn trong việc tìm phòng với giá cả phải chăng? Bạn
        không thích các thủ tục phức tạp. Hãy đến với LuviStay.
      </p>
      <p className="about-description">
        Chúng tôi là một công ty cung cấp dịch vụ du lịch trực tuyến. Dịch vụ
        của chúng tôi cung cấp các loại phòng như khách sạn, nhà nghỉ, homestay,
        resort,... với giá rẻ tại thị trường Việt Nam.
      </p>
    </section>
  </div>
);

const SectionImage = ({ fsrc, ssrc }) => (
  <div className="flex flex-row justify-between py-8 space-x-4 w-full">
    <img className="w-1/2" src={fsrc}></img>
    <img className="w-1/2" src={ssrc}></img>
  </div>
);

const SectionTwo = () => (
  <div className="grid grid-cols-2 content-center gap-4 py-8">
    <div className="h-20 flex flex-col justify-around">
      <div className="w-12 sm:w-14 bg-primary h-[0.2rem]" />
      <h6 className="about-review">Trải nghiệm dịch vụ cao cấp</h6>
      <h3 className="about-title">Nơi nghỉ dưỡng sang trọng</h3>
    </div>
    <div className="space-y-2">
      <p className="about-description">
        Dịch vụ của chúng tôi, trải qua các quy trình kiểm duyệt nghiêm ngặt.
        Mang đến cho khách hàng những trải nghiệm tốt nhất.
      </p>
      <p className="about-description">
        Bên cạnh đó, chúng tôi luôn sẵn sàng tiếp nhận những phản hồi từ khách
        hàng.
      </p>
      <p className="about-description">
        Không những thế, những căn phòng LuviStay cung cấp cho các bạn đa dạng
        từ các địa điểm nổi tiếng như Nha Trang, Vũng Tàu, Đà Lạt, Phú Quốc,...
        Đa dạng về quang cảnh xung quanh như đồi núi, biển, rừng,...
      </p>
    </div>
    <div className="grid grid-cols-2 grid-rows-4 gap-2">
      <div className="row-start-1 row-span-2 row-end-3">
        <img
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-6-691x1024.jpg"
          alt=""
        />
      </div>
      <div className="row-start-3 row-span-2 row-end-5">
        <img
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-4-691x1024.jpg"
          alt=""
        />
      </div>
      <div className="row-start-2 row-span-2 row-end-4">
        <img
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-5-691x1024.jpg"
          alt=""
        />
      </div>
    </div>
    <div className="grid grid-cols-2 grid-rows-4 gap-2">
      <div className="row-start-1 row-span-2 row-end-3">
        <img
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-6-691x1024.jpg"
          alt=""
        />
      </div>
      <div className="row-start-3 row-span-2 row-end-5">
        <img
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-4-691x1024.jpg"
          alt=""
        />
      </div>
      <div className="row-start-2 row-span-2 row-end-4">
        <img
          src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-5-691x1024.jpg"
          alt=""
        />
      </div>
    </div>
  </div>
);

const SectionThree = () => (
  <div className="flex flex-row justify-between py-8">
    <section className="basis-1/2">
      <div className="h-20 flex flex-col justify-between space-y-6">
        <section className="flex flex-col justify-between space-y-3">
          <div className="w-12 sm:w-14 bg-primary h-[0.2rem]" />
          {/* <h6 className="about-review"></h6> */}
          <h3 className="about-title">Lịch sử hình thành</h3>
        </section>
        <section className="flex flex-col space-y-3">
          <p className="about-description about-italic">
            Năm 2022, với khát vọng cung cấp một giải pháp du lịch tiện lợi, giá
            cả phải chăng, Huy Vô UIT đã lên ý tưởng và thành lập công ty
            Luvistay.
          </p>
        </section>
      </div>
    </section>
    <section className="basis-1/2 flex flex-col space-y-6">
      <p className="about-description">
        Luvistay có một lịch sử phong phú với nhiều sự kiện bất ngờ.
      </p>
      <p className="about-description">
        Lịch sử Luvistay bắt đầu vào mùa covid thứ 3. Vào một buổi chiều mùa
        xuân, Huy Vô UIT - một sinh viên trường Đại Học Công nghệ thông tin - đã
        nảy ra ý tưởng xây dựng một trang web cho phép người dùng đặt phòng từ
        xa khi mà dịch bệnh đang căng thẳng, hạn chế tiếp xúc gần.
      </p>
      <p className="about-description">
        Tên của khách sạn bắt nguồn từ ánh trăng - luna. "Lu" trong luna. Ban
        đầu là Luviana nhưng đã bị trùng nên đã được biến tấu thành Luvistay.
      </p>
      <p className="about-description">
        Kể từ thời điểm được công bố, trang web đã nhận được nhiều lượt truy cập
        và lời khen có cánh từ các du khách. Hàng tháng đội ngũ webdev cập nhật
        phản hồi từ khách hàng và cải tiến trang web đến mức tốt nhất có thể.
        Được phục vụ các bạn là vinh dự của chúng tôi.
      </p>
    </section>
  </div>
);

const Founders = () => (
  <div className="flex flex-col justify-center items-center py-10 px-20">
    <div className="w-full flex justify-start items-center py-10">
      <div className="h-20 flex flex-col justify-around">
        <div className="w-12 sm:w-14 bg-primary h-[0.2rem]" />
        <h3 className="text-2xl about-title">Đội ngũ phát triển</h3>
      </div>
    </div>
    <div className="__founders_gridview">
      {founders.map((f) => (
        <div className="founder-container">
          <img
            className="founder-avatar"
            src={f.avatar}
            alt="co-founder-avatar"
          />
          <div className="flex flex-col justify-center items-center text-center space-y-4  h-[20%] pb-2">
            <h3>{f.name}</h3>
            <div className="h-[0.2rem] w-20 bg-primary" />
            <h4>{f.position}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutUsPage;
