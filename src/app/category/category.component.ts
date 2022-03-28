import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  dataCate: any;
  objCat = {
    catName:'', 
    id:''
  };
  
  checkAction = false;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getAllCategory();
  }
  addNewCategory(formValue:any){
    this.commonService.createCategory(formValue).subscribe((res)=>{
    this.getAllCategory()
    });
  }
  getAllCategory(){
    this.commonService.listAllCategory().subscribe((res)=>{
    this.dataCate = res;
    })
  }
  editCat(itemCat: any){
    this.objCat = itemCat;
    this.checkAction = true;
  }
  updateCategory(dataCat: any){
     this.checkAction = false;
    this.commonService.updateCategory(dataCat).subscribe((res)=>{
      this.getAllCategory();
    })
  }
  deleteCategory(dataCat: any){
    this.commonService.deleteCategory(dataCat).subscribe((res)=>{
      this.getAllCategory();
    })
  }

}
