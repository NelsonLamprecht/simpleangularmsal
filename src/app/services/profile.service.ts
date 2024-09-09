import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileApiUrl: string;

  constructor(private http: HttpClient) {
    this.profileApiUrl = environment.apiConfig.uri
  }

  getProfile() {
    return this.http.get(this.profileApiUrl)
      .pipe(
        map((data: any) => {
        return data;
    })
  );
  }
}
