import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-addpro',
  templateUrl: './addpro.component.html',
  styleUrls: ['./addpro.component.css']
})
export class AddproComponent implements OnInit {
  dataPro: any;
  objPro = {
    proName:'', 
    proPrice:'',
    proDes:'',
    proStt:'',
    proImage:'',
    proId:'',
    id:''
  };
  checkAction = false;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllPro();
  }
  addNewPro(formValue:any){
    console.log(formValue)
    this.commonService.createProduct(formValue).subscribe((res)=>{
      console.log("thêm thành công")
      this.getAllPro()
    });
  }
  getAllPro(){
    this.commonService.listAllProduct().subscribe((res)=>{
      this.dataPro = res;
    })
  }
  editPro(itemPro: any){
    this.objPro = itemPro;
    this.checkAction = true;
  }
  updatePro(dataPro: any){
     this.checkAction = false;
    this.commonService.updateProduct(dataPro).subscribe((res)=>{
      this.getAllPro();
    })
  }
  deletePro(dataPro: any){
    this.commonService.deleteProduct(dataPro).subscribe((res)=>{
      this.getAllPro();
    })
  }

}
