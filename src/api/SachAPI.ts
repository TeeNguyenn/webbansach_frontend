import React from 'react';
import SachModel from '../models/SachModel';
import { my_request } from './Request';
import { error } from 'console';

interface KetQuaInterface {
    ketQua: SachModel[];
    tongSoTrang: number;
    tongSoSach: number;
}

export async function laySach(duongDan: string): Promise<KetQuaInterface> {
    const ketQua: SachModel[] = [];

    // Gọi phương thức request
    const response = await my_request(duongDan);

    // Lấy ra json sách
    const responseData = response._embedded.saches;

    // Lấy thông tin trang
    const tongSoTrang: number = response.page.totalPages;
    const tongSoSach: number = response.page.totalElements;

    for (const key in responseData) {
        ketQua.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa: responseData[key].moTa,
            soLuong: responseData[key].soLuong,
            tenTacGia: responseData[key].tenTacGia,
            trungBinhXepHang: responseData[key].trungBinhXepHang,
        });
    }

    return {
        ketQua,
        tongSoTrang,
        tongSoSach,
    };
}

export async function layToanBoSach(
    trangHienTai: number
): Promise<KetQuaInterface> {
    // Xác định endpoint, sắp xếp theo maSach và sort giảm dần
    // size  = 8 : Tổng số sách trên 1 trang là 8
    // page = 0 : lấy ra sách từ trang 0
    const duongDan: string = `http://localhost:8080/sach?sort=maSach,desc&size=8&page=${trangHienTai}`;

    return laySach(duongDan);
}

export async function lay3SachMoiNhat(): Promise<KetQuaInterface> {
    // Xác định endpoint, sắp xếp theo maSach và sort giảm dần
    const duongDan: string =
        'http://localhost:8080/sach?sort=maSach,desc&page=0&size=3';

    return laySach(duongDan);
}

export async function laySachTheoMaSach(maSach: number): Promise<SachModel | null> {

    const duongDan = `http://localhost:8080/sach/${maSach}`

    try {
        // Gọi phương thức request
        const response = await fetch(duongDan);

        if (!response.ok) {
            throw new Error('Gặp lỗi trong quá trình gọi API lấy sách!')
        }

        const sachData = await response.json()

        if (sachData) {
            return {
                maSach: sachData.maSach,
                tenSach: sachData.tenSach,
                giaBan: sachData.giaBan,
                giaNiemYet: sachData.giaNiemYet,
                moTa: sachData.moTa,
                soLuong: sachData.soLuong,
                tenTacGia: sachData.tenTacGia,
                trungBinhXepHang: sachData.trungBinhXepHang,
            }
        }
        else {
            throw new Error("Sách không tồn tại!");

        }
    } catch (error) {
        console.error("Error is: ", error);
        return null

    }


}

export async function timKiemSach(tuKhoaTimKiem: string, maTheLoai: number): Promise<KetQuaInterface> {
    // Xác định endpoint, sắp xếp theo maSach và sort giảm dần
    let duongDan: string = `http://localhost:8080/sach?sort=maSach,desc&size=8&page=0`;

    if (tuKhoaTimKiem !== '' && maTheLoai === 0)
        duongDan =
            `http://localhost:8080/sach/search/findByTenSachContaining?sort=maSach,desc&size=8&page=0&tenSach=${tuKhoaTimKiem}`;
    else if (tuKhoaTimKiem === '' && maTheLoai > 0) {
        duongDan =
            `http://localhost:8080/sach/search/findByDanhSachTheLoai_MaTheLoai?sort=maSach,desc&size=8&page=0&maTheLoai=${maTheLoai}`;
    }
    else if (tuKhoaTimKiem !== '' && maTheLoai > 0) {
        duongDan =
            `http://localhost:8080/sach/search/findByTenSachContainingAndDanhSachTheLoai_MaTheLoai?sort=maSach,desc&size=8&page=0&maTheLoai=${maTheLoai}&tenSach=${tuKhoaTimKiem}`;
    }
    return laySach(duongDan);
}
