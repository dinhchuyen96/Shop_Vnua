import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute) { }
  id: any;
  idc: any;
  name: any;
  itemPro: any;
  usercomment: any;
  comments: any;
  dataLoging: any; // dữ liệu người dùng đang đăng nhập
  btndelete = false
  sended = false;
  objUser = {
    number:'', 
    id:'',
  };
  
  today: number = Date.now();
  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    }); 
    this.getProDetailByProId(this.id);
    this.activatedRoute.paramMap.subscribe(params =>{
      this.idc = params.get('id')
    })
    this.getCommentsById(this.idc)
    this.getUserLoging();
    
  }
  getProDetailByProId(id: any) {
    this.commonService.listDetailById(id).subscribe((res)=>{
      this.itemPro = res;
    })
  }  
  getUserLoging(){
    this.commonService.listUserLoging().subscribe((res)=>{
    this.dataLoging = res;
    this.name = this.dataLoging[0]["fistname"] + " "+ this.dataLoging[0]["lastname"];
    if(this.dataLoging[0]["number"] == "admin"){this.btndelete = true}
    // gán tên người đang đăng nhập 
    })
  }
  postComment(fomvalue: any){
    this.commonService.postCommentToSever(fomvalue).subscribe((res)=>{
      console.log(fomvalue)
      this.getCommentsById(this.idc)
      this.sended = true;
    })
  }
  getCommentsById(idc: any) {
    this.commonService.getCommentsById(idc).subscribe((res)=>{
      this.comments = res;
    })
  }
  deleteComment(dataComment: any) {    // Xóa comment
    this.commonService.deleteComment(dataComment).subscribe((res)=>{
      this.getCommentsById(this.idc)
    })
  }
  
}
