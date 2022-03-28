import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  dataUse: any;
  flag: boolean = false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }
  getAllUser(){
    this.commonService.listAllUse().subscribe((res)=>{
    this.dataUse = res;    
    this.flag = true;
    })
  }
  close(){
    this.flag = false;
  }
}
