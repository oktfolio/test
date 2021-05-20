import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LayoutAuthenticationComponent} from "./authentication/layout-authentication.component";
import {LayoutDefaultComponent} from "./default/layout-default.component";
import {LayoutExceptionComponent} from "./exception/layout-exception.component";
import {LayoutFullscreenComponent} from "./fullscreen/layout-fullscreen.component";
import {SharedModule} from "../shared";

const COMPONENTS: any[] = [
  LayoutAuthenticationComponent,
  LayoutDefaultComponent,
  LayoutExceptionComponent,
  LayoutFullscreenComponent
];

const ENTRY_COMPONENTS: any[] = [];

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [...COMPONENTS],
  entryComponents: ENTRY_COMPONENTS,
  exports: [...COMPONENTS],
})
export class LayoutModule {
}
