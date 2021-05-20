import {NgModule} from "@angular/core";
import {Route, RouterModule} from "@angular/router";
import {environment} from "../../environments/environment";
import {LayoutAuthenticationComponent} from "../layout/authentication/layout-authentication.component";
import {LayoutDefaultComponent} from "../layout/default/layout-default.component";
import {LayoutExceptionComponent} from "../layout/exception/layout-exception.component";
import {UserLoginComponent} from "./authentication/login/user-login.component";
import {UserRegisterComponent} from "./authentication/register/user-register.component";

const routes: Route[] = [
  {
    path: '',
    component: LayoutDefaultComponent
  },
  {
    path: 'auth',
    component: LayoutAuthenticationComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent,
      },
      {
        path: 'register',
        component: UserRegisterComponent,
      }]
  },
  {
    path: 'exception',
    component: LayoutExceptionComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
