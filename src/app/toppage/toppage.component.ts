import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-toppage',
  templateUrl: './toppage.component.html',
  styleUrls: ['./toppage.component.css']
})
export class ToppageComponent implements OnInit {
  dataCate: any;
  dataLog: any;
  btnLogin = false;
  checkBtnAd = false; // ẩn nút admin
  checklogin = false;
  dataCart: any;
  numberCart: any; 
  @Input() text: any;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllCategory();
    this.getUserLoging();
    this.checklogin = true;
  }
  getAllCategory(){
    this.commonService.listAllCategory().subscribe((res)=>{
      this.dataCate = res;
    })
  }
  getUserLoging(){
    this.commonService.listUserLoging().subscribe((res)=>{
      this.dataLog = res;
      if(this.dataLog == ""){this.checklogin = true} // nếu không có tài khoản nào đang đăng nhập thì show btn vào trang login
      else{this.checklogin = false};              // ẩn nút vào trang login
      if(this.dataLog[0]["number"] == "admin"){ // trùng tài khoản admin thì show nút admin
        this.checkBtnAd = true;
      }
    })
  }
  getLogOut(dataLogin: any){     // đăng xuất
    this.commonService.logOut(dataLogin).subscribe((res)=>{
      this.checklogin = true;   // show nút vào trang login
      window.location.href = '' // load lại trang chủ
    })
  }
  getItemCart(){
    this.commonService.getItemcart().subscribe((res) => {
      this.dataCart = res;
      this.numberCart = this.dataCart.length
      console.log(this.numberCart)
    })
  }
  
}
