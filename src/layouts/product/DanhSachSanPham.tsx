import React, { useEffect, useState } from 'react';
import SachModel from '../../models/SachModel';
import SachProps from './components/SachProps';
import { layToanBoSach, timKiemSach } from '../../api/SachAPI';
import { error } from 'console';
import { PhanTrang } from '../utils/PhanTrang';

interface DanhSachSanPhamProps {
    tuKhoaTimKiem: string;
    maTheLoai: number;
}

const DanhSachSanPham = ({
    tuKhoaTimKiem,
    maTheLoai,
}: DanhSachSanPhamProps) => {
    const [danhSachQuyenSach, setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = useState<boolean>(true);
    const [baoLoi, setBaoLoi] = useState(null);

    const [trangHienTai, setTrangHienTai] = useState<number>(1);
    const [tongSoTrang, setTongSoTrang] = useState<number>(0);
    const [tongSoSach, setTongSoSach] = useState<number>(0);

    useEffect(() => {
        if (tuKhoaTimKiem === '' && maTheLoai === 0) {
            layToanBoSach(trangHienTai - 1)
                .then((kq) => {
                    setDanhSachQuyenSach(kq.ketQua);
                    setTongSoTrang(kq.tongSoTrang);
                    setDangTaiDuLieu(false);
                })
                .catch((error) => {
                    setDangTaiDuLieu(false);
                    setBaoLoi(error.message);
                });
        } else {
            timKiemSach(tuKhoaTimKiem, maTheLoai)
                .then((kq) => {
                    setDanhSachQuyenSach(kq.ketQua);
                    setTongSoTrang(kq.tongSoTrang);
                    setDangTaiDuLieu(false);
                })
                .catch((error) => {
                    setDangTaiDuLieu(false);
                    setBaoLoi(error.message);
                });
        }
    }, [trangHienTai, tuKhoaTimKiem, maTheLoai]); // Chỉ gọi một lần

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

    const handlePhanTrang = (currentPage: number) =>
        setTrangHienTai(currentPage);

    if (danhSachQuyenSach.length === 0) {
        return (
            <div className="container ">
                <div className="row mt-4 mb-3">
                    <h1 className="text-danger">
                        Hiện không tìm thấy sách theo yêu cầu!
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div className="container ">
            <div className="row mt-4 mb-3">
                {danhSachQuyenSach.map((sach) => (
                    <SachProps key={sach.maSach} sach={sach}></SachProps>
                ))}
            </div>
            <PhanTrang
                trangHienTai={trangHienTai}
                tongSoTrang={tongSoTrang}
                phanTrang={handlePhanTrang}
            ></PhanTrang>
        </div>
    );
};

export default DanhSachSanPham;
