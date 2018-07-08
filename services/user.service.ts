import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserActual } from '../models/user-actual.model';

@Injectable()
export class UserService {

  private serviceUrl = 'https://enablement.us/rest/E_DB/SP?V_PRDCR_SRC_CD=Advent%20Business%20Company%20Inc.&V_PRDCR_APP_CD=OPLOG&V_PRDCR_PRCS_CD=Convey%20Fuel%20Requirments&V_PRDCR_SRVC_CD=START&V_DIRECTION=A&REST_Service=Orchestration&Verb=GET';
  private nosrvcurl='https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUser(): Observable<any>{
    
    return this.http.get<any>(this.serviceUrl);
  }
}
