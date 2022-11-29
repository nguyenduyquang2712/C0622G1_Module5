import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Category} from "../../model/category";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categoryList:Category[];
  message:string='';
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private productService: ProductService,
              private _toastService: ToastrService) {
  }

  ngOnInit() {
   this.productService.findAllCategory().subscribe(data=>{
     this.categoryList=data;
   })
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(data=>{
      this.message="them moi thanh cong";
      this.productForm.reset();
    });

  }
}
