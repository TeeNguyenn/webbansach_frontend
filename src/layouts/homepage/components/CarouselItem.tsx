import React, { useEffect, useState } from "react";
import SachModel from "../../../models/SachModel";
import {
    layAnhDauTienCuaMotSach,
    layToanBoAnhCuaMotSach,
} from "../../../api/HinhAnhAPI";
import HinhAnhModel from "../../../models/HinhAnhModel";

interface CarouselItemInterface {
    sach: SachModel;
}

const CarouselItem: React.FC<CarouselItemInterface> = (props) => {
    const maSach: number = props.sach.maSach;

    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([]);
    const [dangtaiDuLieu, setDangtaiDuLieu] = useState<boolean>(true);
    const [baoloi, setBaoLoi] = useState(null);

    useEffect(() => {
        layAnhDauTienCuaMotSach(maSach)
            .then((anhData) => {
                setDanhSachAnh(anhData);
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
        <div className="row align-items-center">
            <div className="col-5">
                <img
                    src={danhSachAnh[0]?.duLieuAnh}
                    className="d-block w-50 mx-auto"
                    alt="..."
                />
            </div>
            <div className="col-7">
                <div className="carousel-caption d-none d-md-block">
                    <h5>{props.sach.tenSach}</h5>
                    <p>{props.sach.moTa}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselItem;
