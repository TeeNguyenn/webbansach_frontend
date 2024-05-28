import React, { useEffect, useState } from 'react';
import SachModel from '../../../models/SachModel';
import { layToanBoAnhCuaMotSach } from '../../../api/HinhAnhAPI';
import HinhAnhModel from '../../../models/HinhAnhModel';
import { Link } from 'react-router-dom';

interface SachPropsInterface {
    sach: SachModel;
}

const SachProps: React.FC<SachPropsInterface> = (props) => {
    const maSach: number = props.sach.maSach;

    const [danhSachAnh, setDanhSachAnh] = useState<HinhAnhModel[]>([]);
    const [dangtaiDuLieu, setDangtaiDuLieu] = useState<boolean>(true);
    const [baoloi, setBaoLoi] = useState(null);

    useEffect(() => {
        layToanBoAnhCuaMotSach(maSach)
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

    let imgPath: string | undefined = '';

    for (const hinhAnh of danhSachAnh) {
        if (hinhAnh.laIcon) imgPath = hinhAnh.duLieuAnh;
    }

    return (
        <div className="col-md-3 mt-2">
            <div className="card pt-2">
                <Link to={`/sach/${props.sach.maSach}`}>
                    <img
                        src={imgPath || danhSachAnh[0]?.duLieuAnh}
                        className="card-img-top object-fit-contain"
                        alt={props.sach.tenSach}
                        style={{ height: '200px' }}
                    />
                </Link>
                <div className="card-body">
                    <Link
                        to={`/sach/${props.sach.maSach}`}
                        className="text-decoration-none text-primary"
                    >
                        <h5 className="card-title">{props.sach.tenSach}</h5>
                    </Link>
                    <p className="card-text">{props.sach.moTa}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{props.sach.giaNiemYet}</del>
                        </span>
                        <span className="discounted-price text-danger ms-1">
                            <strong>{props.sach.giaBan}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SachProps;
