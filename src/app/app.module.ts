import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RichTextComponent } from './pages/rich-text/rich-text.component';
import { SimpleMdeDirective } from './directives/simple-mde.directive';

@NgModule({
  declarations: [
    AppComponent,
    RichTextComponent,
    SimpleMdeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
