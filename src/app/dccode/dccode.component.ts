import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-dccode',
  templateUrl: './dccode.component.html',
  styleUrls: ['./dccode.component.css']
})
export class DccodeComponent implements OnInit {
  objCode = {
    code:'',
    persent: '',
    id: ''    
  };
  dataCode: any;
  checkAction = false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllCode();
  }
  addNewCode(formValue:any){
    this.commonService.createCode(formValue).subscribe((res)=>{
    this.getAllCode()
    });
  }
  getAllCode(){
    this.commonService.listAllCode().subscribe((res)=>{
    this.dataCode = res;
    })
  }
  editCode(itemCat: any){
    this.objCode = itemCat;
    this.checkAction = true;
  }
  updateCode(dataCat: any){
     this.checkAction = false;
    this.commonService.updateCode(dataCat).subscribe((res)=>{
      this.getAllCode();
    })
  }
  deleteCode(dataCat: any){
    this.commonService.deleteCode(dataCat).subscribe((res)=>{
      this.getAllCode();
    })
  }

}
