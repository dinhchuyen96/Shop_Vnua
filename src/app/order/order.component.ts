import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/core/models/product';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute) { }
  id: any;
  objPro = {
    proName:'', 
    proPrice:'',
    proDes:'',
    proStt:'',
    proImage:'',
    proId:'',
    id:''
  };
  codedc: any;
  od: any;
  namePro: any;
  itemPro: any; 
  tamtinh: any;
  tongtien: any;
  checkuc = false;
  checktc = false;
  checktb = false;
  checkud = false;
  checkcode: boolean = false;
  dataCode: any;
  codeview: any;
  codepercent: any;
  check21 = false;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getProDetailByProId(this.id)
      this.od = 0;  
      this.getAllCode();  
      this.tamtinh1();  
    }); 
    
    
  }
  getProDetailByProId(id: any) {
    this.commonService.listDetailById(id).subscribe((res)=>{
      this.itemPro = res;
      console.log(this.itemPro["proName"])
    })
  };
  getAllCode(){
    this.commonService.listAllCode().subscribe((res)=>{
    this.dataCode = res;    
    })
  }
  showuc(){
    this.checkuc = true;
  };
  apdung(){
    for (var i = 0; i < this.dataCode.length ; i ++){
      if(this.codedc == this.dataCode[i]["code"]){
        this.codepercent = this.dataCode[i]["persent"];
        this.codeview = this.dataCode[i]["code"];
        this.checktc = true;
        this.checktb = false;
        this.checkcode = true; 
        this.tongtien = this.tamtinh * (1-(this.codepercent/100))
        break;
      }else{
        this.checktb = true;
        this.checktc = false;
        this.checkcode = false; 
        this.tongtien = this.tamtinh;
      };
    };
    // if(this.checkcode == true){console.log("mã OK")}else{console.log("chẳng tìm thấy")};  
  }
  minus(){
    if(this.od > 1){
    this.od --};
    
  }
  plus(){    
    if(this.od >= 100){
      this.od = 100;
    }else{
      this.od++}
  };
  uudai(){
    if(this.od >= 100){
      this.checkud = true;
      this.od = 100;
    } else{ this.checkud = false}
  }
  tamtinh1(){
    this.tamtinh = this.od * this.itemPro.proPrice;
    if(this.checkcode == true){
      this.tongtien = this.tamtinh * (1-(this.codepercent/100))
    }else{ this.tongtien = this.tamtinh }
  }
  

  // hạn chế dùng any - define data props type 
  addNeworder(formValue2: any){    
    this.commonService.creatOrder(formValue2).subscribe((res)=>{
    this.check21 = true;
    })
  }
}
