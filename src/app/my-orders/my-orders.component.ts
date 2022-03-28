import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  dataOd: any; 
  status: boolean = false;
  id21: any;
  done: any;
  checkAction: any = false;
  objOd = {
    id:'',
    odNameSp:'', 
    sosp:'',
    code: '',
    giatamtinh: '',
    tongtien: '',
    gioitinh:'',
    odName: '',
    odNumber: '',
    odTinh: '',
    odHuyen:'',    
    odXa:'',
    odXom: '',
    tinhtrang: ''
  }
  ngOnInit(): void {
    this.getAllOd();    
  }
  getAllOd(){
    this.commonService.listAllOd().subscribe((res)=>{
      this.dataOd = res;
    })}
  deleteOd(dataOd: any){
    this.commonService.deleteOd(dataOd).subscribe((res)=>{
      this.getAllOd();
  })}

  editOd(itemOd: any){
    this.objOd = itemOd;
    this.checkAction = true;
  }
  updateOd(dataOd: any){
    this.checkAction = false;
    this.commonService.updateOd(dataOd).subscribe((res)=>{
    this.getAllOd();
   })
 }
}
