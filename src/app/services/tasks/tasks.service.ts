import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, map} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TasksService {


  baseUrl: "https://app.microenv.com/backend/key/934cd5ac5316e3d39833a2/rest/api/tasks/"
  constructor(private httpClient: HttpClient) {}

    public getTasks() : Observable<any>{
      return this.httpClient.get(this.baseUrl)
      .pipe(map((response: Response) => response));

    }

    private getUrl() {
      return `${this.baseUrl}`;
    }
   
}
