import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import DanhSachSanPham from '../../product/DanhSachSanPham';
import { useParams } from 'react-router-dom';

interface HomePageProps {
    tuKhoaTimKiem: string;
}

const HomePage = ({ tuKhoaTimKiem }: HomePageProps) => {
    const { maTheLoai } = useParams();

    let maTheLoaiNumber = 0;

    try {
        maTheLoaiNumber = parseInt(maTheLoai + '');
    } catch (error) {
        maTheLoaiNumber = 0;
        console.log('Error: ', error);
    }

    if (Number.isNaN(maTheLoaiNumber)) {
        maTheLoaiNumber = 0;
    }

    return (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <DanhSachSanPham
                tuKhoaTimKiem={tuKhoaTimKiem}
                maTheLoai={maTheLoaiNumber}
            ></DanhSachSanPham>
        </div>
    );
};

export default HomePage;
