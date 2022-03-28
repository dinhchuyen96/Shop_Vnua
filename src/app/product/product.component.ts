import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dataCate: any;

  constructor(private commonService: CommonService, private activatedRoute: ActivatedRoute) {

  }
  dataPro: any;
  proId: any;
  ngOnInit(): void {
    this.getAllCategory();
    this.activatedRoute.paramMap.subscribe(params => {
      this.proId = params.get('id');
      this.getProductByProId(this.proId);
      // console.log(this.proId);
    }); 
    
  }
  
  getProductByProId(id: any) {
    this.commonService.listAllProByProId(id).subscribe((res)=>{
      this.dataPro = res;
    })
  }
  getAllCategory(){
    this.commonService.listAllCategory().subscribe((res)=>{
      this.dataCate = res;
    })
  }
  addtocart(cartform: any){
    console.log(cartform);
    this.commonService.additemtocart(cartform).subscribe((res)=>{
      
    })
  }
}
