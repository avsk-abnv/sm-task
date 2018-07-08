import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Observable, of as observableOf } from 'rxjs';
import 'rxjs/add/operator/map'
import { DataSource } from '@angular/cdk/collections';
import { UserActual } from '../../models/user-actual.model';
@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  dataSource= new UserDataSource(this.userService);
  displayedColumns= ['AUTO_ID','PRDCR_APP_CD','PRDCR_PRCS_CD','SRVC_CD','TRNSN_CND','LEVEL'];
  //displayedColumns= ['name','email','phone'];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
export class UserDataSource extends DataSource<any>{
  constructor(private userService: UserService){
    super();
  }

  connect(): Observable<UserActual[]>{
    var i:number;
    var myUserActual:UserActual[]=new Array();
    return this.userService.getUser().map( objects => {
      for(i=0;i<objects["AUTO_ID"].length;i++){
        myUserActual.push({AUTO_ID:objects["AUTO_ID"][i],PRDCR_APP_CD:objects["PRDCR_APP_CD"][i],PRDCR_PRCS_CD:objects["PRDCR_PRCS_CD"][i],SRVC_CD:objects["SRVC_CD"][i],TRNSN_CND:objects["TRNSN_CND"][i],LEVEL:objects["LEVEL"][i]});
      }
      console.log(myUserActual);
      return myUserActual;
    });
  }
  disconnect(){}
}
