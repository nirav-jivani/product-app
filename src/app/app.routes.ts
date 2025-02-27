import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
// import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    // { path: 'products/:id', component: ProductDetailComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' }
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}