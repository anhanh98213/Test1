import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardLecturerComponent } from './components/dashboard-lecturer/dashboard-lecturer.component';
import { DashboardManagerComponent } from './components/dashboard-manager/dashboard-manager.component';
import { DashboardStudentComponent } from './components/dashboard-student/dashboard-student.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddMajorComponent } from './components/major/add-major/add-major.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboardAdmin', component: DashboardAdminComponent},
  { path: 'dashboardManager', component: DashboardManagerComponent},
  { path: 'dashboardLecturer', component: DashboardLecturerComponent},
  { path: 'dashboardStudent', component: DashboardStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
