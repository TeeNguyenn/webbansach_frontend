import React, { useEffect, useState } from 'react';
import SachModel from '../../../models/SachModel';
import { lay3SachMoiNhat } from '../../../api/SachAPI';
import CarouselItem from './CarouselItem';

const Carousel: React.FC = () => {
    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangtaiDuLieu, setDangtaiDuLieu] = useState<boolean>(true);
    const [baoloi, setBaoLoi] = useState(null);

    useEffect(() => {
        lay3SachMoiNhat()
            .then((kq) => {
                setDanhSachQuyenSach(kq.ketQua);
                setDangtaiDuLieu(false);
            })
            .catch((error) => setBaoLoi(error.message));
    }, []); // Chỉ gọi một lần

    if (dangtaiDuLieu) {
        return (
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        );
    }

    if (baoloi) {
        return (
            <div>
                <h1>Gặp lỗi: {baoloi}</h1>
            </div>
        );
    }

    return (
        <div className="bg-light py-5">
            <div className="container">
                <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div
                            className="carousel-item active"
                            data-bs-interval="10000"
                        >
                            <CarouselItem
                                key={0}
                                sach={danhSachQuyenSach[0]}
                            ></CarouselItem>
                        </div>
                        <div className="carousel-item" data-bs-interval="10000">
                            <CarouselItem
                                key={1}
                                sach={danhSachQuyenSach[1]}
                            ></CarouselItem>
                        </div>
                        <div className="carousel-item" data-bs-interval="10000">
                            <CarouselItem
                                key={2}
                                sach={danhSachQuyenSach[2]}
                            ></CarouselItem>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
