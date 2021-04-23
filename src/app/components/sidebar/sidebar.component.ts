import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  panelOpenState = false;

  constructor(
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

 user = JSON.parse(localStorage.getItem('user')!)

}
