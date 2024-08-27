import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
  
  ngOnInit(): void {
    // Clear the local storage
    localStorage.clear();
    window.location.href = 'https://localhost:4200';

  }

}
