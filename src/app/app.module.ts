import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* RUTAS */
import { APP_ROUTES } from './app.routes';

/* MODULOS */
import { PagesModule } from './pages/pages.module';
import { ServiceModule } from './services/service.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ServiceModule
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
