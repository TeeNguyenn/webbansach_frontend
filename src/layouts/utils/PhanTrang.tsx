import React from 'react';

interface PhanTrangInteface {
    trangHienTai: number;
    tongSoTrang: number;
    phanTrang(trangHienTai: number): any;
}

export const PhanTrang: React.FC<PhanTrangInteface> = ({
    trangHienTai,
    tongSoTrang,
    phanTrang,
}) => {
    // Số trang muốn hiển thị.VD: hiện 5 trang 1 2 3 4 5
    const danhSachTrang = [];

    if (trangHienTai === 1) {
        danhSachTrang.push(trangHienTai);
        // Hiện trang 2 nếu tổng số trang >= 2
        if (tongSoTrang >= trangHienTai + 1) {
            danhSachTrang.push(trangHienTai + 1);
        }
        // Hiện trang 3 nếu tổng số trang >= 3
        if (tongSoTrang >= trangHienTai + 2) {
            danhSachTrang.push(trangHienTai + 2);
        }
        // Hiện trang 4 nếu tổng số trang >= 4
        if (tongSoTrang >= trangHienTai + 3) {
            danhSachTrang.push(trangHienTai + 3);
        }
        // Hiện trang 5 nếu tổng số trang >= 5
        if (tongSoTrang >= trangHienTai + 4) {
            danhSachTrang.push(trangHienTai + 4);
        }

    } else if (trangHienTai == tongSoTrang) {
         // Trang - 4
         if (trangHienTai >= 5) {
            danhSachTrang.push(trangHienTai - 4);
        }
         // Trang - 3
         if (trangHienTai >= 3) {
            danhSachTrang.push(trangHienTai - 3);
        }
        // Trang - 2
        if (trangHienTai >= 3) {
            danhSachTrang.push(trangHienTai - 2);
        }
        // Trang - 1
        if (trangHienTai >= 2) {
            danhSachTrang.push(trangHienTai - 1);
        }
        // Trang đó
        danhSachTrang.push(trangHienTai);

    }
    else if (trangHienTai > 1) {
        // Trang - 2
        if (trangHienTai >= 3) {
            danhSachTrang.push(trangHienTai - 2);
        }
        // Trang - 1
        if (trangHienTai >= 2) {
            danhSachTrang.push(trangHienTai - 1);
        }
        // Trang đó
        danhSachTrang.push(trangHienTai);
        // Trang + 1
        if (tongSoTrang >= trangHienTai + 1) {
            danhSachTrang.push(trangHienTai + 1);
        }
        // Trang + 2
        if (tongSoTrang >= trangHienTai + 2) {
            danhSachTrang.push(trangHienTai + 2);
        }
    }
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item" onClick={() => phanTrang(1)}>
                    <button className="page-link">Trang đầu</button>
                </li>
                {danhSachTrang.map((trang) => (
                    <li
                        key={trang}
                        onClick={() => phanTrang(trang)}
                        className={
                            'page-item ' +
                            (trangHienTai === trang ? 'active' : '')
                        }
                    >
                        <button className="page-link">{trang}</button>
                    </li>
                ))}
                <li
                    className="page-item"
                    onClick={() => phanTrang(tongSoTrang)}
                >
                    <button className="page-link">Trang cuối</button>
                </li>
            </ul>
        </nav>
    );
};
