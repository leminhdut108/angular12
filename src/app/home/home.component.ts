import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'minh';
  public age = 25;



  public traiCay = ['Táo', 'Nho', 'Cam', 'Quít', 'Ổi'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12, haGia: true },
    { ten: 'Nho', gia: -3.234, haGia: false },
    { ten: 'Cam', gia: 34.26, haGia: false },
    { ten: 'Quít', gia: 32.45, haGia: true },
  ];
  public districts: string[] = ['Quận Huyện'];
  public vietnamData = [
    { city: 'Chọn thành phố', district: ['Quận Huyện'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
    {
      city: 'Bắc Kạn',
      district: [
        'Thị xã Bắc Kạn',
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
        'Huyện Chợ Đồn',
        'Huyện Chợ Mới',
        'Huyện Na Rì',
        'Huyện Ngân Sơn',
        'Huyện Pác Nặm',
      ],
    },
  ];
  public counter = 0;
  public counterBinhPhuong = 0;

  public x = 0;
  public x_binh_thuong = 0;


  constructor(private common: CommonService) { }

  public ngOnInit(): void {
    console.log('HomeComponent ngOnInit = ', this.common.counter);
    this.counter = this.common.counter;
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);

    this.x_binh_thuong = this.common.binhPhuong(this.x);

    this.common.counter++;
  }

  public onchangeX(event: any): void {
    console.log("xxx", event)


    if (event.target.value !== NaN) {
      this.x = event.target.value;

      this.x_binh_thuong = this.common.binhPhuong(this.x);
    }

  }

  public onchangeName(event: any): void {
    console.log("onchangeName", event)

    this.name = event.target.value;
  }


  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

  public themvao(): void {
    console.log('themvao');
    this.name = 'ahihi';
  }
  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }

    // cách 1
    // const search = this.vietnamData.filter((data) => data.city === city);
    // console.log('search', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    // cách 2
    this.districts =
      this.vietnamData.find((data) => data.city === city)?.district || [];
  }
}
