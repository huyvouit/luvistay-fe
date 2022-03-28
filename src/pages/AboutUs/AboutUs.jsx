import React from "react";
import { Link } from "react-router-dom";
import "./aboutus.scss";

const AboutUsPage = () => {
  return (
    <>
      <div className="about-header-bg h-80 w-full" />
      <section className="flex flex-col pt-14 justify-center px-20 mb-10 leading-6 tracking-wide">
        <SectionOne />
        <SectionImage
          fsrc="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-1-1-1024x1024.jpg"
          ssrc="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/welcome-1-1-1024x1024.jpg"
        />
        <SectionTwo />
        <SectionThree />
      </section>
      <hr className="my-12" />
    </>
  );
};

const SectionOne = () => (
  <div className="flex flex-row justify-between py-8">
    <section className="basis-1/2">
      <div className="h-20 flex flex-col justify-around">
        <div className="w-12 sm:w-14 bg-primary h-[0.2rem]" />
        <h6>Luôn mang đến trải nghiệm tốt nhất</h6>
        <h3>Chào mừng đến với LuviStay</h3>
      </div>
    </section>
    <section className="basis-1/2 space-y-2">
      <p>
        Bạn đang gặp khó khăn trong việc tìm phòng với giá cả phải chăng? Bạn
        không thích các thủ tục phức tạp. Hãy đến với LuviStay.
      </p>
      <p>
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
      <h6>Luôn mang đến trải nghiệm tốt nhất</h6>
      <h3>Chào mừng đến với LuviStay</h3>
    </div>
    <div className="space-y-2">
      <p>
        Dịch vụ của chúng tôi, trải qua các quy trình kiểm duyệt nghiêm ngặt.
        Mang đến cho khách hàng những trải nghiệm tốt nhất.
      </p>
      <p>
        Bên cạnh đó, chúng tôi luôn sẵn sàng tiếp nhận những phản hồi từ khách
        hàng.
      </p>
      <p>
        Không những thế, những căn phòng LuviStay cung cấp cho các bạn đa dạng
        từ các địa điểm nổi tiếng như Nha Trang, Vũng Tàu, Đà Lạt, Phú Quốc,...
        Đa dạng về quang cảnh xung quanh như đồi núi, biển, rừng,...
      </p>
    </div>
    <div className="grid grid-cols-2 grid-rows-4 gap-2">
      <div className="row-start-1 row-span-2 row-end-3 bg-red-300">
          <img src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-6-691x1024.jpg" />
      </div>
      <div className="row-start-3 row-span-2 row-end-5 bg-red-300">
        <img src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-4-691x1024.jpg" />
      </div>
      <div className="row-start-2 row-span-2 row-end-4 bg-red-300">
        <img src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-5-691x1024.jpg" />
      </div>
    </div>
    <div className="grid grid-cols-2 grid-rows-4 gap-2">
      <div className="row-start-1 row-span-2 row-end-3 bg-red-300">
          <img src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-6-691x1024.jpg" />
      </div>
      <div className="row-start-3 row-span-2 row-end-5 bg-red-300">
        <img src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-4-691x1024.jpg" />
      </div>
      <div className="row-start-2 row-span-2 row-end-4 bg-red-300">
        <img src="https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-5-691x1024.jpg" />
      </div>
    </div>
  </div>
);

const SectionThree = () => (
  <div className="flex flex-row justify-between py-8 mb-20">
    <section className="basis-1/2">
      <div className="h-20 flex flex-col justify-between space-y-6">
        <section className="flex flex-col justify-between space-y-3">
          <div className="w-12 sm:w-14 bg-primary h-[0.2rem]" />
          <h6>Luôn mang đến trải nghiệm tốt nhất</h6>
          <h3>Chào mừng đến với LuviStay</h3>
        </section>
        <section className="flex flex-col space-y-3">
          <p>
            Năm 2022, với khát vọng cung cấp một giải pháp du lịch tiện lợi, giá cả phải chăng, Huy Vô UIT đã lên ý tưởng và thành lập công ty Luvistay.
          </p>
          <Link className="text-primary" to="/404">Xem thêm</Link>
        </section>
      </div>
    </section>
    <section className="basis-1/2"></section>
  </div>
);

export default AboutUsPage;
