import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-inforcus',
  templateUrl: './inforcus.component.html',
  styleUrls: ['./inforcus.component.css']
})
export class InforcusComponent implements OnInit {
  dataIf : any;
  inforCus = {
    id:'',
    ifName:'',
    ifNumber:'',
    ifEmail:'',
    ifNote:''
  };

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllIf()
  }
  getAllIf(){
    this.commonService.listAllInforcus().subscribe((res)=>{
      this.dataIf = res;
    })
  }
  deleteIf(itemIf: any){
    this.commonService.deleteInforcus(itemIf).subscribe((res)=>{
      this.getAllIf()
    })
  }
  editNote(itemIf: any){
    this.inforCus = itemIf
  }
  updateifNote(dataIF: any){
    console.log(dataIF)
    this.commonService.updateNote(dataIF).subscribe((res)=>{
      this.getAllIf()
      
    })
  }
}
