import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';

import { ProfileType } from 'src/app/models/profile.type';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: [],
    imports: [AsyncPipe,CommonModule],
    standalone: true
})
export class ProfileComponent implements OnInit {  
  givenName$: Observable<string> | undefined;
  profile$: Observable<ProfileType> | undefined;
  account: AccountInfo | null = null;
  roles: string[] | undefined;

  constructor(
    private readonly authService: MsalService,
    private readonly profileService: ProfileService
  ) {
  }

  ngOnInit() {
    this.roles = this.authService.instance.getActiveAccount()?.idTokenClaims?.roles;
    this.profile$ = this.profileService.getProfile();
  }

}
