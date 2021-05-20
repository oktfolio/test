import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

const COMPONENTS: any[] = [];
const THIRDS: any[] = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  declarations: [...COMPONENTS, ...THIRDS],
  entryComponents: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...COMPONENTS,
    ...THIRDS,
  ],
})
export class SharedModule {
}
