import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StoreModule } from './store/store.module';
import { RouterModule } from "@angular/router";
import { Store } from './store/store';
import { CartDetail } from './store/cart-detail/cart-detail';
import { Checkout } from './store/checkout/checkout';
// import { CardDetail } from './card-detail/card-detail';
// import { Store } from './store/store';
// import {StoreFirstGaurd} from" ./storeFirstgaurd"
import { StoreFirstGuard } from './storeFirst.guard';
@NgModule({
  declarations: [
    App,
    // CardDetail
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
        RouterModule.forRoot([
            {
                path: "store", component: Store,
                 canActivate: [StoreFirstGuard]
            },
            {
                path: "cart", component: CartDetail,
                 canActivate: [StoreFirstGuard]
            },
            {
                path: "checkout", component: Checkout,
                 canActivate: [StoreFirstGuard]
            },
            { path: "**", redirectTo: "/store" }
        ])],

  
  providers: [
    provideBrowserGlobalErrorListeners(),
      StoreFirstGuard,
  ],
  bootstrap: [App]
})
export class AppModule { }
