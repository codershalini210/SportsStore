import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { Store } from "./store";
// import { Counter } from './counter';
import { CounterDirective } from "./counter";
import { CartSummary } from './cart-summary/cart-summary';
import { CartDetail } from './cart-detail/cart-detail';
import { Checkout } from './checkout/checkout';
import { RouterModule } from "@angular/router";
@NgModule({
imports: [ModelModule, BrowserModule, FormsModule,CounterDirective,RouterModule],
declarations: [Store, CartSummary, CartDetail, Checkout],
exports: [Store]
// fgh
})
export class StoreModule { }