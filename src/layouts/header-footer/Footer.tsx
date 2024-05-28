import React from "react";

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5> DỊCH VỤ</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Điều khoản sử dụng
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Chính sách bảo mật
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Chính sách thanh toán
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Hệ thống trung tâm - nhà sách
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Giới thiệu
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>HỖ TRỢ</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Chính sách đổi - trả - hoàn tiền
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Chính sách bảo hành - bồi hoàn
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Chính sách vận chuyển
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Chính sách khách sỉ
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Phương thức thanh toán và xuất HĐ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>TÀI KHOẢN CỦA TÔI</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Đăng nhập/Tạo mới tài khoản
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Thay đổi địa chỉ khách hàng
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Chi tiết tài khoản
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a
                                    href="#"
                                    className="nav-link p-0 text-body-secondary"
                                >
                                    Lịch sử mua hàng
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Đăng ký nhận tin</h5>
                            <p>
                                Thông báo hàng tháng về những điều mới mẻ và thú
                                vị từ chúng tôi.
                            </p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label className="visually-hidden">
                                    Địa chỉ email
                                </label>
                                <input
                                    id="newsletter1"
                                    type="text"
                                    className="form-control"
                                    placeholder="Địa chỉ email"
                                />
                                <button
                                    className="btn btn-primary flex-shrink-0"
                                    type="button"
                                >
                                    Đăng kí
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2024 Tee, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="#">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
