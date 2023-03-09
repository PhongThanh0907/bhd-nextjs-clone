import Vani from "../../public/Hinh-Vani-Ngang.jpeg";
import Valentine from "../../public/8.3-1920x1080-VIỆT-ANH-1.jpg";
import App from "../../public/App.jpg";
import Visa from "../../public/Visa-x-BHD-WEB.jpg";
import Image from "next/image";

export const listImage = [
  {
    key: 1,
    image: <Image src={Valentine} alt="img" />,
  },
  {
    key: 1,
    image: <Image src={App} alt="img" />,
  },
  {
    key: 1,
    image: <Image src={Visa} alt="img" />,
  },
  {
    key: 1,
    image: <Image src={Vani} alt="img" />,
  },
];

export const menuHeader = [
  { title: "Lịch chiếu", path: "/", delay: "200" },
  { title: "Hệ thống rạp", path: "/", delay: "300" },
  { title: "Khuyến mãi | Sự kiện", path: "/", delay: "400" },
  { title: "Dịch vụ quảng cáo", path: "/", delay: "500" },
  { title: "Tuyển dụng", path: "/", delay: "600" },
  { title: "Về chúng tôi", path: "/", delay: "700" },
];

export const showMovies = [
  { title: "Phim đang chiếu", path: "" },
  { title: "Phim sắp chiếu", path: "" },
  { title: "Vé bán trước", path: "" },
];

export const listImagePromotion = [
  {
    url: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Traoquayeuthuong.1920x1080-1.png",
  },
  {
    url: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Hinh-Vani-Ngang.jpeg",
  },
  {
    url: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Visa-x-BHD-WEB.jpg",
  },
  {
    url: "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png",
  },
  {
    url: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Web-HappyDay.png",
  },
  {
    url: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg",
  },
];

export const listImageEvent = [
  {
    url: "https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-ScanQR-710x320.jpg",
  },
  {
    url: "https://www.bhdstar.vn/wp-content/uploads/2018/03/BHD-Star-APP-710x320.jpg",
  },
  {
    url: "https://www.bhdstar.vn/wp-content/uploads/2017/10/BHD-Star_Hotline_710x320-2.jpg",
  },
  {
    url: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Suat-Khuya-Web.jpg",
  },
];

export const aboutBHDCinema = [
  { title: "Hệ Thống Rạp", path: "/" },
  { title: "Tuyển dụng", path: "/" },
  { title: "Liên hệ", path: "/" },
];

export const termsConditions = [
  { title: "Quy định thành viên", path: "/" },
  { title: "Điều khoản", path: "/" },
  { title: "Hướng dẫn đặt vé trực tuyến", path: "/" },
  { title: "Quy định và chính sách chung", path: "/" },
  {
    title: "Chính sách bảo vệ thông tin cá nhân của người tiêu dùng",
    path: "/",
  },
];
