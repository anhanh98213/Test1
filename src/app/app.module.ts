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
import { AddComponent } from './components/major/add/add.component';
import { ViewComponent } from './components/major/view/view.component';
import { EditComponent } from './components/major/edit/edit.component';
import { DeleteComponent } from './components/major/delete/delete.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddMajorComponent } from './components/major/add-major/add-major.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardLecturerComponent } from './components/dashboard-lecturer/dashboard-lecturer.component';
import { DashboardStudentComponent } from './components/dashboard-student/dashboard-student.component';
import { DashboardManagerComponent } from './components/dashboard-manager/dashboard-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
    SidebarComponent,
    AddMajorComponent,
    HomeComponent,
    DashboardAdminComponent,
    DashboardLecturerComponent,
    DashboardStudentComponent,
    DashboardManagerComponent
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
