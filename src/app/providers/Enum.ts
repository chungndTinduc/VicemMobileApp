import { Injectable, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, AlertController,LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export enum Enum {

        Vanbanden = 1,
        Vanbandi = 2,
        Vanbanduthao = 3,
        Congviec = 4,
        Chuongtrinhcongtac = 5,
        Lichlamviec = 6,
        Hosotailieu = 7,
        Kiennghi = 9,
        Thongbao = 10,
        Bieumau = 11,
        Datphonghop = 12,
        Chuongtrinhhophoinghi = 13,
        Uyquyen = 14,
        Hethong = 15,
        Danhmuc = 16,
        Coquanbanhanh = 17,
        Loaivanban = 18,
        Linhvuc = 19,
        Quyenhan = 20,
        Vaitro = 21,
        Nguoidung = 22,
        Donvi = 23,
        Chucvu = 24,
        Nhomnguoidung = 25,
        Nhomdonvi = 26,
        Sovanban = 27,
        Loghethong = 28,
        Thongkebaocao = 29,
        Vaitrotheochucvu = 30,
        Themmoivanbanden = 31,
        Capnhatvanbanden = 32,
        Xoavanbanden = 33,
        Inphieutrinhvanbanden = 34,
        Ketthucvanban = 35,
        Butphevanbanden = 36,
        Xemtatcavanbanden = 37,
        Xemquytrinhluanchuyenvanbanden = 38,
        Guivanbanden = 39,
        Insovanbanden = 40,
        Thuhoivanbanden = 41,
        Tralaivanbanden = 42,
        Theodoivanban = 43,
        Phanxulyvanbanden = 44,
        Themmoivanbandi = 45,
        Capnhatvanbandi = 46,
        Xoavanbandi = 47,
        Xemtatcavanbandi = 48,
        Guivanbandi = 49,
        Thuhoivanbandi = 50,
        Insovanbandi = 51,
        Capsovanbandi = 52,
        Themmoivanbanduthao = 53,
        Capnhatvanbanduthao = 54,
        Xoavanbanduthao = 55,
        Duyetvanbanduthao = 56,
        Huyduyetvanbanduthao = 57,
        Tuchoivanbanduthao = 58,
        Duyetthethucvanban = 59,
        Tuchoiduyetthethucvanban = 60,
        Xemtatcavanbanduthao = 61,
        Chuyenphathanhvanbanduthao = 62,
        ChuyenthanglenLanhdaoDonvi = 63,
        Capnhatfilevanbanduthao = 64,
        Themmoicongviec = 65,
        Capnhatcongviec = 66,
        Xoacongviec = 67,
        Giaoviectiep = 68,
        Pheduyetgiahan = 69,
        Tuchoigiahan = 70,
        Themmoichuongtrinhcongtac = 71,
        Capnhatchuongtrinhcongtac = 72,
        Xoachuongtrinhcongtac = 73,
        Capnhattiendochuongtrinhcongtac = 74,
        Themmoilichlamviec = 75,
        Capnhatlichlamviec = 76,
        Xoalichlamviec = 77,
        Themmoihosotailieu = 78,
        Capnhathosotailieu = 79,
        Xoahosotailieu = 80,
        Chuyenluutru = 81,
        Themmoithongbao = 82,
        Capnhatthongbao = 83,
        Xoathongbao = 84,
        Themmoibieumau = 85,
        Capnhatbieumau = 86,
        Xoabieumau = 87,
        Phonghop = 88,
        Thongtindatphong = 89,
        Themmoiphonghop = 90,
        Capnhatphonghop = 91,
        Xoaphonghop = 92,
        Themmoithongtindatphong = 93,
        Capnhatthongtindatphong = 94,
        Xoathongtindatphong = 95,
        Pheduyetdatphong = 96,
        Huyduyetdatphong = 97,
        Tuchoithongtindatphong = 98,
        Chuyenthongtindatphong = 99,
        Themmoichuongtrinhhophoinghi = 100,
        Capnhatchuongtrinhhophoinghi = 101,
        Xoachuongtrinhhophoinghi = 102,
        Themmoiuyquyen = 103,
        Capnhatuyquyen = 104,
        Xoathongtinuyquyen = 105,
        Theodoiuyquyen = 106,
        Themmoidanhmuc = 107,
        Capnhatdanhmuc = 108,
        Xoadanhmuc = 109,
        Themmoicoquanbanhanh = 110,
        Capnhatcoquanbanhanh = 111,
        Xoacoquanbanhanh = 112,
        Themmoiloaivanban = 113,
        Sualoaivanban = 114,
        Xoaloaivanban = 115,
        Themmoilinhvuc = 116,
        Capnhatlinhvuc = 117,
        Xoalinhvuc = 118,
        Themmoiquyenhan = 119,
        Capnhatquyenhan = 120,
        Xoaquyenhan = 121,
        Themmoivaitro = 122,
        Capnhatvaitro = 123,
        Xoavaitro = 124,
        Themmoinguoidung = 125,
        Capnhatnguoidung = 126,
        Xoanguoidung = 127,
        Cauhinhnguoidung = 128,
        Doimatkhau = 129,
        Annguoidung = 130,
        Hienthinguoidung = 131,
        Themnguoidungcosan = 132,
        Themmoidonvi = 133,
        Capnhatdonvi = 134,
        Xoadonvi = 135,
        Andonvi = 136,
        Hienthidonvi = 137,
        Themmoichucvu = 138,
        Capnhatchucvu = 139,
        Xoachucvu = 140,
        Cauhinhvaitro = 141,
        Themmoinhomnguoidung = 142,
        Capnhatnhomnguoidung = 143,
        Xoanhomnguoidung = 144,
        Themmoinhomdonvi = 145,
        Capnhatnhomdonvi = 146,
        Xoanhomdonvi = 147,
        Themmoisovanban = 148,
        Capnhatsovanban = 149,
        Xoasovanban = 150,
        Thongkebaocaovanbanden = 151,
        Thongkebaocaovanbandi = 152,
        Thongkebaocaovanbanduthao = 153,
        Thongkebaocaocongviec = 154,
        Thongkebaocaochuongtrinhcongtac = 155,
        Thongkebaocaoxulykiennghi = 156,
        Vanthutonghop = 157,
        VanthuBanlanhdao = 158,
        ThukyBanlanhdao = 159,
        BanlanhdaoNHNN = 160,
        Themmoikiennghi = 161,
        Capnhatkiennghi = 162,
        Xoakiennghi = 163,
        Duyetkiennghi = 164,
        Tuchoikiennghi = 165,
        CauhinhModule = 166,
        ThemmoiCauhinhModule = 167,
        CapnhatCauhinhModule = 168,
        XoaCauhinhModule = 169,
        Guinhanvanbandi = 170,
        Ykienvanbandi = 171,
        Chuyenphathanhquabuudien = 172,
        Themmoichuyenphathanh = 173,
        Capnhatchuyenphathanh = 175,
        Xoachuyenphathanh = 176,
        Insochuyenphathanh = 177,
        Quanlythongtinkyhopquochoi = 178,
        Loaihosotailieu = 179,
        Themmoithongtinkyhopquochoi = 180,
        Capnhatthongtinkyhopquochoi = 181,
        Xoathongtinkyhopquochoi = 182,
        Themmoiloaihosotailieu = 183,
        Capnhatloaihosotailieu = 184,
        Xoaloaihosotailieu = 185,
        Baocaoxulykiennghi = 186,
        Baocaocongviec = 187,
        Quanlyformbaocaodong = 188,
        Kiennghicutri = 189,
        Quanlytinhthanh = 190,
        Themmoitinhthanh = 191,
        Capnhattinhthanh = 192,
        Xoatinhthanh = 193,
        Themmoiformbaocaodong = 194,
        Capnhatformbaocaodong = 196,
        Xoaformbaocaodong = 197,
        Themmoikiennghicutri = 199,
        Capnhatkiennghicutri = 200,
        Xoakiennghicutri = 201,
        Themmoibaocaocongviec = 202,
        Capnhatbaocaocongviec = 203,
        Xoabaocaocongviec = 204,
        Cauhinhthoigianbaocao = 205,
        Guibaocaocongviec = 206,
        Vanthuphongban = 207,
        VanthuDonvi = 208,
        QuantrihethongAdmin = 1207,
        QuantrihethongSuperAdmin = 1208,
        Yeucaubangoc = 1209,
        Luutru = 1210,
        Kehoachthuthap = 1211,
        Themmoikehoachthuthap = 1212,
        Capnhatkehoachthuthap = 1213,
        Xoakehoachthuthap = 1214,
        Duyetkehoachthuthap = 1215,
        Kehoachnopluu = 1216,
        Muclucnopluu = 1217,
        Hosonopluu = 1218,
        Vanbannopluu = 1219,
        Themmoimuclucnopluu = 1220,
        Capnhatmuclucnopluu = 1221,
        Xoamuclucnopluu = 1222,
        Themmoihosonopluu = 1223,
        Capnhathosonopluu = 1224,
        Xoahosonopluu = 1225,
        Themvanbannopluu = 1226,
        Capnhatvanbannopluu = 1227,
        Xoavanbannopluu = 1228,
        Danhmucluutru = 1229,
        Bangiaohoso = 1230,
        Bienmucchinhly = 1231,
        Tiepnhantailieu = 1232,
        Bienmuctailieu = 1233,
        Quanlytailieuluutruu = 2209,
        Xephopcap = 2210,
        Loaichuongtrinh = 2211,
        Themmoiloaichuongtrinh = 2212,
        Capnhatloaichuongtrinh = 2213,
        Xoaloaichuongtrinh = 2214,
        Loaichude = 2215,
        Themmoiloaichude = 2216,
        Capnhatloaichude = 2217,
        Xoaloaichude = 2218,
        Ketthucchuongtrinhcongtac = 2219,
        Xembaocaotonghop = 2220,
        Baocaodinhky = 2221,
        Themmoibaocaodinhky = 2222,
        Capnhatbaocaodinhky = 2223,
        Xoabaocaodinhky = 2224,
        Nhanbaocaotudonvi = 2225,
        Duyetmuclucnopluu = 2226,
        Khaithac = 2227,
        Khaithactructuyen = 2228,
        Danhsachyeucaukhaithac = 2229,
        Duyetyeucaukhaithac = 2230,
        Ghimuontailieu = 2231,
        Duyetghimuontailieu = 2232,
        Ghitratailieu = 2233,
        Duyetghitratailieu = 2234,
        Danhsachmuontraquahan = 2235,
        Thongbaohethantailieu = 2236,
        Thongbaogiahantailieu = 2237,
        Danhsachmuontragiahan = 2238,
        Duyetthongbaogiahantailieu = 2239,
        Ketthuckiennghi = 2240,
        Inbaocaokiennghi = 2241,
        Giaoviecxulykiennghi = 2242,
        Bangiaomuclucnopluu = 2243,
        Kholuutru = 3243,
        Muclucluutru = 3246,
        Phongluutru = 3247,
        Themmoikholuutru = 3248,
        Xoakholuutru = 3249,
        Capnhatkholuutru = 3250,
        Themmoimuclucluutru = 3251,
        Capnhatmuclucluutru = 3252,
        Xoamuclucluutru = 3253,
        Themmoiphongluutru = 3254,
        Capnhatphongluutru = 3255,
        Xoaphongluutru = 3256,
        Baocaothongkecoso = 3257,
        Baocaothongkecosocuadonvi = 3258,
        Themmoibaocaothongkecoso = 3259,
        Capnhatbaocaothongkecoso = 3260,
        Xoabaocaothongkecoso = 3261,
        Baocaothongkecosocuavanphong = 3262,
        Nhanbaocaocosotudonvi = 3263,
        CauhinhFormbaocaothongkecoso = 3264,
        Inbaocaothongkecoso = 3265,
        Inbaocaotonghopthongkecoso = 3266,
        Kykiemke = 3267,
        Themmoikykiemke = 3268,
        Capnhatkykiemke = 3269,
        Xoakykiemke = 3270,
        Duyetkykiemke = 3271,
        Kykiemketailieu = 3272,
        Themmoitailieukykiemke = 3273,
        Xoatailieukykiemke = 3274,
        Capnhattrangthaitailieukykiemke = 3275,
        Tieuhuytailieu = 4267,
        Themmoiquyetdinhtieuhuy = 4268,
        Quanlydanhsachtieuhuytailieu = 4269,
        Capnhatkehoachtieuhuy = 4270,
        Xoakehoachtieuhuy = 4271,
        Guithongbaotailieusaphethan = 4272,
        Guithongbaoxacnhantieuhuytailieu = 4273,
        Guithongbaogiahantailieutieuhuy = 4274,
        NoptailieuTTLTQG = 4275,
        Themmoidotnoptailieu = 4276,
        Suadotnoptailieu = 4277,
        Xoadotnoptailieu = 4278,
        Themmoitailieuvaodotnop = 4279,
        Hosonopluuphongban = 4280,
        Duyethosophongban = 4281,
        XemlichlamviecBLDNHNN = 4282,
        Nhanthongtinkehoachthuthap = 4283,
        Duyetquyetdinhtieuhuy = 4284,
        Nhanchuongtrinhcongtac = 5284,
        Tiepnhanhosophongban = 5285,
        Lichhopcongtactuan = 5286,
        Themmoilichhopcongtactuan = 5287,
        Sualichhopcongtactuan = 5288,
        Xoalichhopcongtactuan = 5289,
        Thongkelichhopcongtactuan = 5290,
        Tonghopcongviec = 5291,
        Luanchuyenkhithemmoi = 5292,
        Datxe = 5293,
        Danhmucxe = 5294,
        Themmoidanhmucxe = 5295,
        Capnhatdanhmucxe = 5296,
        Xoadanhmucxe = 5297,
        Thongtindatxe = 5298,
        Themmoithongtindatxe = 5299,
        Capnhatthongtindatxe = 5300,
        Xoathongtindatxe = 5301,
        Duyetthongtindatxe = 5302,
        Tuchoithongtindatxe = 5303,
        CapnhatsoKM = 5304,
        Laixe = 5305,
        VanPhong= 5306,
        LichLanhDaoPhong= 5307,
        ThemMoiLichLanhDaoPhong = 5311,
        SuaLichLanhDaoPhong = 5312,
        XoaLichLanhDaoPhong = 5314,
        ThongKeLichlanhDaoPhong= 5315
}

export enum QuyenHan {

        Vanbanden =0,
        Vanbandi =0,
        Vanbanduthao =0,
        Congviec =0,
        Chuongtrinhcongtac =0,
        Lichlamviec =0,
        Hosotailieu =0,
        Kiennghi =0,
        Thongbao =0,
        Bieumau =0,
        Datphonghop =0,
        Chuongtrinhhophoinghi =0,
        Uyquyen =0,
        Hethong =0,
        Danhmuc =0,
        Coquanbanhanh =0,
        Loaivanban =0,
        Linhvuc =0,
        Quyenhan =0,
        Vaitro =0,
        Nguoidung =0,
        Donvi =0,
        Chucvu =0,
        Nhomnguoidung =0,
        Nhomdonvi =0,
        Sovanban =0,
        Loghethong =0,
        Thongkebaocao =0,
        Vaitrotheochucvu =0,
        Themmoivanbanden =0,
        Capnhatvanbanden =0,
        Xoavanbanden =0,
        Inphieutrinhvanbanden =0,
        Ketthucvanban =0,
        Butphevanbanden =0,
        Xemtatcavanbanden =0,
        Xemquytrinhluanchuyenvanbanden =0,
        Guivanbanden =0,
        Insovanbanden =0,
        Thuhoivanbanden =0,
        Tralaivanbanden =0,
        Theodoivanban =0,
        Phanxulyvanbanden =0,
        Themmoivanbandi =0,
        Capnhatvanbandi =0,
        Xoavanbandi =0,
        Xemtatcavanbandi =0,
        Guivanbandi =0,
        Thuhoivanbandi =0,
        Insovanbandi =0,
        Capsovanbandi =0,
        Themmoivanbanduthao =0,
        Capnhatvanbanduthao =0,
        Xoavanbanduthao =0,
        Duyetvanbanduthao =0,
        Huyduyetvanbanduthao =0,
        Tuchoivanbanduthao =0,
        Duyetthethucvanban =0,
        Tuchoiduyetthethucvanban =0,
        Xemtatcavanbanduthao =0,
        Chuyenphathanhvanbanduthao =0,
        ChuyenthanglenLanhdaoDonvi =0,
        Capnhatfilevanbanduthao =0,
        Themmoicongviec =0,
        Capnhatcongviec =0,
        Xoacongviec =0,
        Giaoviectiep =0,
        Pheduyetgiahan =0,
        Tuchoigiahan =0,
        Themmoichuongtrinhcongtac =0,
        Capnhatchuongtrinhcongtac =0,
        Xoachuongtrinhcongtac =0,
        Capnhattiendochuongtrinhcongtac =0,
        Themmoilichlamviec =0,
        Capnhatlichlamviec =0,
        Xoalichlamviec =0,
        Themmoihosotailieu =0,
        Capnhathosotailieu =0,
        Xoahosotailieu =0,
        Chuyenluutru =0,
        Themmoithongbao =0,
        Capnhatthongbao =0,
        Xoathongbao =0,
        Themmoibieumau =0,
        Capnhatbieumau =0,
        Xoabieumau =0,
        Phonghop =0,
        Thongtindatphong =0,
        Themmoiphonghop =0,
        Capnhatphonghop =0,
        Xoaphonghop =0,
        Themmoithongtindatphong =0,
        Capnhatthongtindatphong =0,
        Xoathongtindatphong =0,
        Pheduyetdatphong =0,
        Huyduyetdatphong =0,
        Tuchoithongtindatphong =0,
        Chuyenthongtindatphong =0,
        Themmoichuongtrinhhophoinghi =0,
        Capnhatchuongtrinhhophoinghi =0,
        Xoachuongtrinhhophoinghi =0,
        Themmoiuyquyen =0,
        Capnhatuyquyen =0,
        Xoathongtinuyquyen =0,
        Theodoiuyquyen =0,
        Themmoidanhmuc =0,
        Capnhatdanhmuc =0,
        Xoadanhmuc =0,
        Themmoicoquanbanhanh =0,
        Capnhatcoquanbanhanh =0,
        Xoacoquanbanhanh =0,
        Themmoiloaivanban =0,
        Sualoaivanban =0,
        Xoaloaivanban =0,
        Themmoilinhvuc =0,
        Capnhatlinhvuc =0,
        Xoalinhvuc =0,
        Themmoiquyenhan =0,
        Capnhatquyenhan =0,
        Xoaquyenhan =0,
        Themmoivaitro =0,
        Capnhatvaitro =0,
        Xoavaitro =0,
        Themmoinguoidung =0,
        Capnhatnguoidung =0,
        Xoanguoidung =0,
        Cauhinhnguoidung =0,
        Doimatkhau =0,
        Annguoidung =0,
        Hienthinguoidung =0,
        Themnguoidungcosan =0,
        Themmoidonvi =0,
        Capnhatdonvi =0,
        Xoadonvi =0,
        Andonvi =0,
        Hienthidonvi =0,
        Themmoichucvu =0,
        Capnhatchucvu =0,
        Xoachucvu =0,
        Cauhinhvaitro =0,
        Themmoinhomnguoidung =0,
        Capnhatnhomnguoidung =0,
        Xoanhomnguoidung =0,
        Themmoinhomdonvi =0,
        Capnhatnhomdonvi =0,
        Xoanhomdonvi =0,
        Themmoisovanban =0,
        Capnhatsovanban =0,
        Xoasovanban =0,
        Thongkebaocaovanbanden =0,
        Thongkebaocaovanbandi =0,
        Thongkebaocaovanbanduthao =0,
        Thongkebaocaocongviec =0,
        Thongkebaocaochuongtrinhcongtac =0,
        Thongkebaocaoxulykiennghi =0,
        Vanthutonghop =0,
        VanthuBanlanhdao =0,
        ThukyBanlanhdao =0,
        BanlanhdaoNHNN =0,
        Themmoikiennghi =0,
        Capnhatkiennghi =0,
        Xoakiennghi =0,
        Duyetkiennghi =0,
        Tuchoikiennghi =0,
        CauhinhModule =0,
        ThemmoiCauhinhModule =0,
        CapnhatCauhinhModule =0,
        XoaCauhinhModule =0,
        Guinhanvanbandi =0,
        Ykienvanbandi =0,
        Chuyenphathanhquabuudien =0,
        Themmoichuyenphathanh =0,
        Capnhatchuyenphathanh =0,
        Xoachuyenphathanh =0,
        Insochuyenphathanh =0,
        Quanlythongtinkyhopquochoi =0,
        Loaihosotailieu =0,
        Themmoithongtinkyhopquochoi =0,
        Capnhatthongtinkyhopquochoi =0,
        Xoathongtinkyhopquochoi =0,
        Themmoiloaihosotailieu =0,
        Capnhatloaihosotailieu =0,
        Xoaloaihosotailieu =0,
        Baocaoxulykiennghi =0,
        Baocaocongviec =0,
        Quanlyformbaocaodong =0,
        Kiennghicutri =0,
        Quanlytinhthanh =0,
        Themmoitinhthanh =0,
        Capnhattinhthanh =0,
        Xoatinhthanh =0,
        Themmoiformbaocaodong =0,
        Capnhatformbaocaodong =0,
        Xoaformbaocaodong =0,
        Themmoikiennghicutri =0,
        Capnhatkiennghicutri =0,
        Xoakiennghicutri =0,
        Themmoibaocaocongviec =0,
        Capnhatbaocaocongviec =0,
        Xoabaocaocongviec =0,
        Cauhinhthoigianbaocao =0,
        Guibaocaocongviec =0,
        Vanthuphongban =0,
        VanthuDonvi =0,
        QuantrihethongAdmin =0,
        QuantrihethongSuperAdmin =0,
        Yeucaubangoc =0,
        Luutru =0,
        Kehoachthuthap =0,
        Themmoikehoachthuthap =0,
        Capnhatkehoachthuthap =0,
        Xoakehoachthuthap =0,
        Duyetkehoachthuthap =0,
        Kehoachnopluu =0,
        Muclucnopluu =0,
        Hosonopluu =0,
        Vanbannopluu =0,
        Themmoimuclucnopluu =0,
        Capnhatmuclucnopluu =0,
        Xoamuclucnopluu =0,
        Themmoihosonopluu =0,
        Capnhathosonopluu =0,
        Xoahosonopluu =0,
        Themvanbannopluu =0,
        Capnhatvanbannopluu =0,
        Xoavanbannopluu =0,
        Danhmucluutru =0,
        Bangiaohoso =0,
        Bienmucchinhly =0,
        Tiepnhantailieu =0,
        Bienmuctailieu =0,
        Quanlytailieuluutruu =0,
        Xephopcap =0,
        Loaichuongtrinh =0,
        Themmoiloaichuongtrinh =0,
        Capnhatloaichuongtrinh =0,
        Xoaloaichuongtrinh =0,
        Loaichude =0,
        Themmoiloaichude =0,
        Capnhatloaichude =0,
        Xoaloaichude =0,
        Ketthucchuongtrinhcongtac =0,
        Xembaocaotonghop =0,
        Baocaodinhky =0,
        Themmoibaocaodinhky =0,
        Capnhatbaocaodinhky =0,
        Xoabaocaodinhky =0,
        Nhanbaocaotudonvi =0,
        Duyetmuclucnopluu =0,
        Khaithac =0,
        Khaithactructuyen =0,
        Danhsachyeucaukhaithac =0,
        Duyetyeucaukhaithac =0,
        Ghimuontailieu =0,
        Duyetghimuontailieu =0,
        Ghitratailieu =0,
        Duyetghitratailieu =0,
        Danhsachmuontraquahan =0,
        Thongbaohethantailieu =0,
        Thongbaogiahantailieu =0,
        Danhsachmuontragiahan =0,
        Duyetthongbaogiahantailieu =0,
        Ketthuckiennghi =0,
        Inbaocaokiennghi =0,
        Giaoviecxulykiennghi =0,
        Bangiaomuclucnopluu =0,
        Kholuutru =0,
        Muclucluutru =0,
        Phongluutru =0,
        Themmoikholuutru =0,
        Xoakholuutru =0,
        Capnhatkholuutru =0,
        Themmoimuclucluutru =0,
        Capnhatmuclucluutru =0,
        Xoamuclucluutru =0,
        Themmoiphongluutru =0,
        Capnhatphongluutru =0,
        Xoaphongluutru =0,
        Baocaothongkecoso =0,
        Baocaothongkecosocuadonvi =0,
        Themmoibaocaothongkecoso =0,
        Capnhatbaocaothongkecoso =0,
        Xoabaocaothongkecoso =0,
        Baocaothongkecosocuavanphong =0,
        Nhanbaocaocosotudonvi =0,
        CauhinhFormbaocaothongkecoso =0,
        Inbaocaothongkecoso =0,
        Inbaocaotonghopthongkecoso =0,
        Kykiemke =0,
        Themmoikykiemke =0,
        Capnhatkykiemke =0,
        Xoakykiemke =0,
        Duyetkykiemke =0,
        Kykiemketailieu =0,
        Themmoitailieukykiemke =0,
        Xoatailieukykiemke =0,
        Capnhattrangthaitailieukykiemke =0,
        Tieuhuytailieu =0,
        Themmoiquyetdinhtieuhuy =0,
        Quanlydanhsachtieuhuytailieu =0,
        Capnhatkehoachtieuhuy =0,
        Xoakehoachtieuhuy =0,
        Guithongbaotailieusaphethan =0,
        Guithongbaoxacnhantieuhuytailieu =0,
        Guithongbaogiahantailieutieuhuy =0,
        NoptailieuTTLTQG =0,
        Themmoidotnoptailieu =0,
        Suadotnoptailieu =0,
        Xoadotnoptailieu =0,
        Themmoitailieuvaodotnop =0,
        Hosonopluuphongban =0,
        Duyethosophongban =0,
        XemlichlamviecBLDNHNN =0,
        Nhanthongtinkehoachthuthap =0,
        Duyetquyetdinhtieuhuy =0,
        Nhanchuongtrinhcongtac =0,
        Tiepnhanhosophongban =0,
        Lichhopcongtactuan =0,
        Themmoilichhopcongtactuan =0,
        Sualichhopcongtactuan =0,
        Xoalichhopcongtactuan =0,
        Thongkelichhopcongtactuan =0,
        Tonghopcongviec =0,
        Luanchuyenkhithemmoi =0,
        Datxe =0,
        Danhmucxe =0,
        Themmoidanhmucxe =0,
        Capnhatdanhmucxe =0,
        Xoadanhmucxe =0,
        Thongtindatxe =0,
        Themmoithongtindatxe =0,
        Capnhatthongtindatxe =0,
        Xoathongtindatxe =0,
        Duyetthongtindatxe =0,
        Tuchoithongtindatxe =0,
        CapnhatsoKM =0,
        Laixe =0,
        VanPhong=0,
        LichLanhDaoPhong=0,
        ThemMoiLichLanhDaoPhong =0,
        SuaLichLanhDaoPhong =0,
        XoaLichLanhDaoPhong =0,
        ThongKeLichlanhDaoPhong=0
}