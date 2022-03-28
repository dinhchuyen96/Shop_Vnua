import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  check = false;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }
  addNewIf(formValue: any){
    console.log(formValue)
    this.commonService.creatInfor(formValue).subscribe((res)=>{
      this.check = true;
    })
  }
}
