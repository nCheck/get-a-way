import { HomeComponent } from './home/home.component';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
const appRoutes = [
  {path : '', component : HomeComponent},
  {path : 'loginsignup', component : LoginsignupComponent},
  {path : 'header' , component : HeaderComponent},
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
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
