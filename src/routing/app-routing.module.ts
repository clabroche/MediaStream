import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeRoutes } from '../app/routes'

/**
 * All routes of the application
 */
const APP_ROUTES: Routes = [
  { path: "", redirectTo: "music", pathMatch: "full" },
  ...HomeRoutes,
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
