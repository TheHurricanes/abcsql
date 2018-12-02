import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFlashMessagesModule } from 'ng-flash-messages';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/authguard.service';
import { FooterComponent } from './components/footer/footer.component';
import { Lesson1Component } from './components/lesson1/lesson1.component';
import { Lesson2Component } from './components/lesson2/lesson2.component';
import { Lesson3Component } from './components/lesson3/lesson3.component';
import { Lesson4Component } from './components/lesson4/lesson4.component';


const appRoutes:Routes = [
  { path:'', component:HomeComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  { path:'profile', component:ProfileComponent , canActivate : [AuthGuard]},
  { path:'dashboard', component:DashboardComponent , canActivate : [AuthGuard] },
  { path:'lesson-1', component:Lesson1Component , canActivate : [AuthGuard] },
  { path:'lesson-2', component:Lesson2Component , canActivate : [AuthGuard] },
  { path:'lesson-3', component:Lesson3Component , canActivate : [AuthGuard] },
  { path:'lesson-4', component:Lesson4Component , canActivate : [AuthGuard] },


];

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    FooterComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Lesson4Component,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgFlashMessagesModule
  ],

  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
