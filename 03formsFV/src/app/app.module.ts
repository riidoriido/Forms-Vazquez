import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorhelperComponent } from './shared/components/errorhelper/errorhelper.component';

@NgModule({
  declarations: [AppComponent, RegisterComponent, NavComponent, ErrorhelperComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
