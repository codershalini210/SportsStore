import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'app-store',
  standalone: false,
  templateUrl: './store.html',
  styleUrl: './store.css',
})
export class Store {
constructor(private repository: ProductRepository) { }
get products(): Product[] {
  // console.log("instore")
// console.log(this.repository.getProducts())
  return this.repository.getProducts();

}
get categories(): (string|undefined)[] {
return this.repository.getCategories();
}
ngOnInit(): void {
}
}
