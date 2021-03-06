import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AuthGuard } from './auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlacesComponent } from './places/places.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material.module';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { PassformdataService } from './passformdata.service';
import { MaapsComponent } from './maaps/maaps.component';
import { AgmDirectionModule } from 'agm-direction'



const appRoutes = [
  {
    path: '',
    component: LoginsignupComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],

  },
  {path : 'header' , component : HeaderComponent},

  {
    path : 'places' , component : PlacesComponent
  },

    {
      path : 'maps' , component : MaapsComponent
    }


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlacesComponent,
    LoginsignupComponent,
    MaapsComponent
    
 ],
  imports: [
    BrowserModule,
    MyOwnCustomMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmk0ZLNenVOm3-bcdIHiMm2nBkSrdKLxw'
    }),
    AgmDirectionModule
  ],
  providers: [DataService,  AuthGuard , PassformdataService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
