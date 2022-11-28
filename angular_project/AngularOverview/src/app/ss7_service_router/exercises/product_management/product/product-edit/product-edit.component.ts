import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from "../../model/category";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  productnew:Product;
  categoryList:Category[];
  equals(o1: Category, o2: Category) {
    return o1.id === o2.id;
  }

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit() {
    this.productService.findAllCategory().subscribe(data=>{
      this.categoryList=data;
    })
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product=>{
      this.productnew=product;
      console.log(this.productnew);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price:new FormControl(product.price),
        description:new FormControl(product.description),
        category: new FormControl(product.category)
      });
    });
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(data=>{
      alert('Cập nhật thành công');
    });

  }
}
