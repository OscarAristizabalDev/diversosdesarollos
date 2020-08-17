import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RichTextComponent } from './pages/rich-text/rich-text.component';


const routes: Routes = [
    { path: 'richtext', component: RichTextComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
