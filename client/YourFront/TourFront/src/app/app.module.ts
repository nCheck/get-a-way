import { HomeComponent } from './home/home.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
const appRoutes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuard],

  },
  {path : 'header' , component : HeaderComponent},
  {
    path: 'login',
    component: LoginsignupComponent,

  },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginsignupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataService,  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
