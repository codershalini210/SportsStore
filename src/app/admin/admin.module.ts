import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Auth } from "./auth/auth";            
import { Admin } from "./admin/admin";
// import { AuthGuard } from "./admin/auth.guard";
import { AuthGuard } from "./auth.guard";
import { ProductTable } from './product-table/product-table';
import { ProductEditor } from './product-editor/product-editor';
import { OrderTable } from './order-table/order-table';

let routing = RouterModule.forChild([
  { path: "auth", component: Auth },
    {
    path: "main", component: Admin, canActivate: [AuthGuard],
    children: [
      { path: "products/:mode/:id", component: ProductEditor },
      { path: "products/:mode", component: ProductEditor},
      { path: "products", component: ProductTable},
      { path: "orders", component: OrderTable },
      { path: "**", redirectTo: "products" }
    ]
  },

  { path: "**", redirectTo: "auth" }
]);


@NgModule({
  imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
  declarations: [Auth, Admin, ProductTable, ProductEditor, OrderTable]
})
export class AdminModule { }
