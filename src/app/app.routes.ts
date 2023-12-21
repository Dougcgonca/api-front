import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { GetComponent } from './pages/get-user/get/get.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "", component: TitleComponent },
    { path: "get", component: GetComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
