import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { Store } from "./store";
@NgModule({
imports: [ModelModule, BrowserModule, FormsModule],
declarations: [Store],
exports: [Store]
})
export class StoreModule { }