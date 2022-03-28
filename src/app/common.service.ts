import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  constructor(private _http:HttpClient) { }
  createCategory(dataCat:any){
    //lưu vào database
    return this._http.post("http://localhost:3000/category",dataCat)
  }
  listAllCategory(){
    return this._http.get("http://localhost:3000/category")
  }
  updateCategory(dataPro: any){
    return this._http.put("http://localhost:3000/category/"+dataPro.id,dataPro)
  }
  deleteCategory(dataPro: any){
    return this._http.delete("http://localhost:3000/category/"+dataPro.id)
  }
  // Thêm Sản Phẩm
  
  createProduct(dataPro:any){
    //lưu vào database
    return this._http.post("http://localhost:3000/addproduct",dataPro)
  }

  listAllProduct(){ // lấy sản phẩm từ common về
    return this._http.get("http://localhost:3000/addproduct")
  }
  updateProduct(dataPro: any){ // cập nhật thông tin sản phẩm
    return this._http.put("http://localhost:3000/addproduct/"+dataPro.id,dataPro)
  }
  deleteProduct(dataPro: any){ // xóa sản phẩm
    return this._http.delete("http://localhost:3000/addproduct/"+dataPro.id)
  }
  listAllProByProId(proId: any){ // phân loại sản phẩm theo proId
    return this._http.get("http://localhost:3000/addproduct?proId="+proId)
  }
  // Lấy thông tin sản phẩm theo id
  listDetailById(id: any){
    return this._http.get("http://localhost:3000/addproduct/"+id)
  }
  // Thông tin khách hàng
  creatInfor(dataCus: any){
    return this._http.post("http://localhost:3000/inforcus",dataCus)
  }
  listAllInforcus(){
    return this._http.get("http://localhost:3000/inforcus")
  }
  deleteInforcus(dataCus: any){
    return this._http.delete("http://localhost:3000/inforcus/"+dataCus.id)
  }
  updateNote(dataCus: any){
    return this._http.put("http://localhost:3000/inforcus/"+dataCus.id,dataCus)
  }
  createCode(dataCode:any){
    //lưu vào database code giảm giá
    return this._http.post("http://localhost:3000/dccode",dataCode)
  }
  listAllCode(){ // lấy code từ common về
    return this._http.get("http://localhost:3000/dccode")
  }
  updateCode(dataCode: any){ // cập nhật thông tin sản phẩm
    return this._http.put("http://localhost:3000/dccode/"+dataCode.id,dataCode)
  }
  deleteCode(dataCode: any){
    return this._http.delete("http://localhost:3000/dccode/"+dataCode.id)
  }
  creatOrder(Order: any){
    return this._http.post("http://localhost:3000/my-orders",Order)
  }
  listAllOd(){
    return this._http.get("http://localhost:3000/my-orders")
  }
  deleteOd(dataOd: any){
    return this._http.delete("http://localhost:3000/my-orders/"+dataOd.id)
  }
  updateOd(dataOd: any){
    return this._http.put("http://localhost:3000/my-orders/"+dataOd.id,dataOd)
  }
  creatUser(dataUser:any){
    //lưu vào database
    return this._http.post("http://localhost:3000/user1",dataUser)
  }
  listAllUse(){ // lấy tất cả tài khoản về
    return this._http.get("http://localhost:3000/user1")
  }
  createUseLoging(dataLoging: any){
    return this._http.post("http://localhost:3000/userloging",dataLoging)
  }
  listUserLoging(){ // lấy dữ liệu tài khoản đã đăng nhập
    return this._http.get("http://localhost:3000/userloging")
  }
  logOut(dataLogin: any){
    return this._http.delete("http://localhost:3000/userloging/"+dataLogin.id)
  }
  postCommentToSever(dataComment: any){
    return this._http.post("http://localhost:3000/comments",dataComment)
  }
  getCommentsById(idc: any){
    return this._http.get("http://localhost:3000/comments?idc="+idc)
  }
  deleteComment(dataComment: any){
    return this._http.delete("http://localhost:3000/comments/"+dataComment.id,dataComment)
  }
  additemtocart(datacart: any){
    return this._http.post("http://localhost:3000/cart",datacart)
  }
  getItemcart(){
    return this._http.get("http://localhost:3000/cart")
  }
  deleteCart(dataCart: any){
    return this._http.delete("http://localhost:3000/cart/"+dataCart.id,dataCart)
  }
}
