import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { laySachTheoMaSach } from '../../api/SachAPI';
import SachModel from '../../models/SachModel';

const ChiTietSanPham: React.FC = () => {
    //Lấy mã sách từ URL
    const { maSach } = useParams();

    let maSachNumber = 0;
    try {
        maSachNumber = parseInt(maSach + '');
        if (Number.isNaN(maSachNumber)) {
            maSachNumber = 0;
        }
    } catch (error) {
        maSachNumber = 0;
        console.error('Error: ', error);
    }

    //Declaration
    const [sach, setSach] = useState<SachModel | null>(null);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
    const [baoLoi, setBaoLoi] = useState(null);

    useEffect(() => {
        laySachTheoMaSach(maSachNumber)
            .then((result) => {
                setSach(result);
                setDangTaiDuLieu(false);
            })
            .catch((err) => {
                setBaoLoi(err.message);
                setDangTaiDuLieu(false);
            });
    }, [maSachNumber]);

    if (dangTaiDuLieu) {
        return (
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        );
    }

    if (baoLoi) {
        return (
            <div>
                <h1>Gặp lỗi: {baoLoi}</h1>
            </div>
        );
    }

    if (!sach) {
        return (
            <div>
                <h1 className="text-danger">Gặp lỗi: {baoLoi}</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-4">
                    <h1>Ảnh</h1>
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-8">
                            <h1>{sach.tenSach}</h1>
                            <p>{sach.trungBinhXepHang}</p>
                            <p>{sach.giaBan}</p>
                            <hr />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: sach.moTa + '',
                                }}
                            />
                        </div>
                        <div className="col-4">Phần đặt hàng</div>
                    </div>
                </div>
            </div>
            <div>Phần review</div>
        </div>
    );
};

export default ChiTietSanPham;
