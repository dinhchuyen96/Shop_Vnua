import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Input } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  passlogin: any;
  uselogin: any;
  dataUse: any;
  wronglogin = false;    // ẩn hiển cảnh báo sai thông tin đăng nhập
  checkac = false;      // dùng để ẩn hiện biểu tượng chưa nhập user
  checkpw = false;       //// dùng để ẩn hiện biểu tượng chưa nhập password
  checklg = false;
  show: boolean = false;
  @Input() text: any;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllUser();
    console.log("ahihi")
  }
  getAllUser(){           // lấy user về (để so sánh với data nhập ở form)
    this.commonService.listAllUse().subscribe((res)=>{
    this.dataUse = res;    
    })
  }
  hidewarning(){          // ẩn cảnh báo chưa nhập user & password
    this.checkac = false;
    this.checkpw = false;
    this.wronglogin = false;
  }
  dataLogin(user2:any){   // đăng ký ( đẩy dữ liệu đăng ký nhận từ form đăng ký lên JSON)
    this.commonService.createUseLoging(user2).subscribe((res)=>{
    });
  }
  
  login(){
    this.checklg = false;
    if(this.uselogin == undefined){this.checkac = true;}
      else{
          if(this.passlogin == undefined){this.checkpw = true}
          else{
              for(var i=0; i<this.dataUse?.length; i++){
                console.log("1")
                  if(this.uselogin == this.dataUse[i]["number"] && this.passlogin == this.dataUse[i]["passWord"]){
                    this.dataLogin(this.dataUse[i]);
                    this.text = this.dataUse[i]["fistname"]+this.dataUse[i]["lastname"]
                    this.checklg = true; 
                    window.location.href = ''
                    break;
              } 
          }
              if(this.checklg == false) { this.wronglogin = true; }   
            }  
      }
    
  }
  
  password() {
    this.show = !this.show;
  }
}
