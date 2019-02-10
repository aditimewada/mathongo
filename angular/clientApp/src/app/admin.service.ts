import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable()
export class AdminService {
    serverUrl = 'http://localhost:8080/';
    constructor(
        private http: HttpClient,
        private router: Router) {}
    
    getQuestions(){
        return this.http.get(this.serverUrl + 'api/questions')
        .pipe(map((response: Response) => {
        return <any>response;
      }));
    }
}