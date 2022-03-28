import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dataCart: any
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getItemCart()
  }
  getItemCart(){
      this.commonService.getItemcart().subscribe((res) => {
        this.dataCart = res;
        let i = this.dataCart.length
        console.log(i)
      })
    }
    deleteCart(dataCart: any){
      this.commonService.deleteCart(dataCart).subscribe((res) => {
        this.getItemCart()
      })
    }
}
