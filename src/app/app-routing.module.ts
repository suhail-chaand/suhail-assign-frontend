import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './core/error/error.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  { path: 'product-details/:id', component: ProductDetailsComponent },

  { path: 'error/:code', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
