import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material/material.module';
import { TodoComponent } from './todo/todo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
<<<<<<< HEAD
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
=======
import { InicioComponent } from './inicio/inicio.component';
import { LeitorQrCodeComponent } from './leitor-qr-code/leitor-qr-code.component';

import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { GeoLocComponent } from './geo-loc/geo-loc.component';
>>>>>>> 62ba3d2832a16de111e4c7571242ea2795010337

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    InicioComponent,
    LeitorQrCodeComponent,
    GeoLocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
<<<<<<< HEAD
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatSidenavModule
  
=======
    ZXingScannerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
>>>>>>> 62ba3d2832a16de111e4c7571242ea2795010337
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
