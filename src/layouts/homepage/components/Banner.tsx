import React from "react";

const Banner = () => {
    return (
        <div className="p-2  bg-dark">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h3 className="display-5 fw-bold">
                        Đọc sách chính là hộ chiếu <br /> cho vô số cuộc phiêu
                        lưu
                    </h3>
                    <p>Mary Pope Osborne</p>
                    <button className="d-block btn btn-primary btn-lg text-white ms-auto">
                        Khám phá sách tại Tee.vn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
