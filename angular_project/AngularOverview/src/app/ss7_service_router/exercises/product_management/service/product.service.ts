import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) {
  }

  findAll():Observable<Product[]> {
    return this._httpClient.get<Product[]>(environment.api_url_product);

  }
findAllCategory():Observable<Category[]>{
    return this._httpClient.get<Category[]>(environment.api_url_category);
}
  saveProduct(product:Product):Observable<Product> {
    return this._httpClient.post<Product>(environment.api_url_product,product);
  }

  findById(id: number):Observable<Product> {
    return this._httpClient.get<Product>(environment.api_url_product+"/"+id);
  }

  updateProduct(id: number, product: Product):Observable<Product> {
    return this._httpClient.put<Product>(environment.api_url_product+"/"+id,product)
  }

  deleteProduct(id: number):Observable<Product> {
      return this._httpClient.delete<Product>(environment.api_url_product+"/"+id);
  }
}
