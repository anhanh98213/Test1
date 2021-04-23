import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddMajorComponent } from './components/major/add-major/add-major.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardLecturerComponent } from './components/dashboard-lecturer/dashboard-lecturer.component';
import { DashboardStudentComponent } from './components/dashboard-student/dashboard-student.component';
import { DashboardManagerComponent } from './components/dashboard-manager/dashboard-manager.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    AddMajorComponent,
    HomeComponent,
    DashboardAdminComponent,
    DashboardLecturerComponent,
    DashboardStudentComponent,
    DashboardManagerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
