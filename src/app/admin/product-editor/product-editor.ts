import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRepository } from '../../model/product.repository';
import { Product } from '../../model/product.model';
@Component({
  selector: 'app-product-editor',
  standalone: false,
  templateUrl: './product-editor.html',
  styleUrl: './product-editor.css',
})
export class ProductEditor {

  editing: boolean = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute) {

    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if (this.editing) {
      Object.assign(this.product,
        repository.getProduct(activeRoute.snapshot.params["id"]));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }


}
