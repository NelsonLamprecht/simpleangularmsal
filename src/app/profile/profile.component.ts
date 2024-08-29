import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string,
  roles?: string[]
};

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: [],
    standalone: true
})
export class ProfileComponent implements OnInit {
  profile: ProfileType | undefined;
  account: AccountInfo | null = null;

  constructor(
    private http: HttpClient,
    private authService: MsalService,
  ) {
  }

  ngOnInit() {
    this.account = this.authService.instance.getActiveAccount();
    this.profile!.roles = this.account?.idTokenClaims?.roles;
    this.getProfile(environment.apiConfig.uri);
  }

  getProfile(url: string) {
    this.http.get(url)
      .subscribe((data: ProfileType) => {
        this.profile!.givenName = data.givenName;
        this.profile!.surname = data.surname;
        this.profile!.userPrincipalName = data.userPrincipalName;
        this.profile!.id = data.id;
      });
  }
}
