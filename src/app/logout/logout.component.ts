import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  
  /**
   *
   */
  constructor(private readonly router: Router) { }
  ngOnInit(): void {
    window.console.log('LogoutComponent ngOnInit');
  }
}
