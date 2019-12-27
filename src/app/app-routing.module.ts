import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book/book.component';
import {ReadComponent} from './read/read.component';
import {CreateBookComponent} from './create-book/create-book.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/books',
  pathMatch: 'full'
}, {
  path: 'books',
  component: BookComponent
}, {
  path: 'books/create',
  component: CreateBookComponent
}, {
  path: 'read',
  component: ReadComponent
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
