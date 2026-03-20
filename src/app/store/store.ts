import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';
import { Router } from "@angular/router";
@Component({
  selector: 'app-store',
  standalone: false,
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {
  public selectedCategory: any =undefined;
  public productsPerPage = 4;
public selectedPage = 1;
constructor(private repository: ProductRepository,private cart: Cart, private router: Router) { }
get pageCount(): number {
return Math.ceil(this.repository
.getProducts(this.selectedCategory).length / this.productsPerPage)
}

  addProductToCart(product: Product) {
    this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
  }


get products(): Product[] {
  console.log("instore")
// console.log(this.repository.getProducts())
  // return this.repository.getProducts(this.selectedCategory);
  let pageIndex = (this.selectedPage - 1) * this.productsPerPage
return this.repository.getProducts(this.selectedCategory)
.slice(pageIndex, pageIndex + this.productsPerPage)

}
get categories(): (string|undefined)[] {
return this.repository.getCategories();
}
changeCategory(newCategory?: string) {
  console.log(newCategory)
this.selectedCategory = newCategory;
}

changePage(newPage: number) {
this.selectedPage = newPage;
}
getValue(event: Event): void {
let val = (event.target as HTMLInputElement).value;
this.changePageSize(+val);
}
changePageSize(newSize: number) {
this.productsPerPage = Number(newSize);
this.changePage(1);
}


// get pageNumbers(): number[] {

// return Array(Math.ceil(this.repository
// .getProducts(this.selectedCategory).length / this.productsPerPage))
// .fill(0).map((x, i) => i + 1);
// }
ngOnInit(): void {
  
  this.changeCategory()
}
}
