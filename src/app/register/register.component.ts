import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  user = {
    fistname: '',
    lastname: '',
    number: '',
    passWord: '',
    dateOfbirth: '',
    sex: ''
  }
  flag = true;
  duplicate = false;
  dataUse: any;
  checkrg: boolean = false
  ngOnInit(): void {
    this.getAllUser()
  }
  hidewarning(){          // ẩn cảnh báo chưa nhập user & password
    this.flag = true;
  }
  getAllUser(){           // lấy user về (để so sánh với data nhập ở form)
    this.commonService.listAllUse().subscribe((res)=>{
    this.dataUse = res;    
    })
  }
  addNewUser(formValue:any){
    this.getAllUser()
    for(var i=0; i<this.dataUse.length;i++){
      if(this.dataUse[i]["number"] == formValue["number"]){
        this.flag = false;
        break;
      } else{this.flag = true;};
      
    }if(this.flag == true){
        console.log("ok bcs")
        this.commonService.creatUser(formValue).subscribe((res)=>{
        this.checkrg = true;
        });
      }
  };
  
}
