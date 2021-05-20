import {NgModule} from "@angular/core";
import {RouteRoutingModule} from "./routes-routing.module";
import {UserRegisterComponent} from "./authentication/register/user-register.component";
import {UserLoginComponent} from "./authentication/login/user-login.component";
import {SharedModule} from "../shared/shared.module";

const COMPONENTS: any[] = [
  UserLoginComponent,
  UserRegisterComponent
];

const ENTRY_COMPONENTS: any[] = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [...COMPONENTS, ...ENTRY_COMPONENTS],
  entryComponents: ENTRY_COMPONENTS,
})
export class RoutesModule {
}
