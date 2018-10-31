/***************************************************************************/
/* Purpose: To read/write data to/from user  tables                        */
/* Created By : Abdul                                                     */
/* Created On : UNK                                                        */
/*-------------------------------------------------------------------------*/
/* Revision History                                                        */
/* Date             By                  Description                        */
/* ----             -----               -----------                        */
/* 7/7/18          AV                  Cleanup Code                        */
/***************************************************************************/
import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from '../domains/user';

@Injectable()
export class UserService {
  public url = `http://theloungehotel.com/api/users.php`;
  usr:any;
  constructor (
    private _http: Http,
   
  ) {}

  public getAllCustomers(): Observable<User[]>{
    return  this._http
      .get(`http://theloungehotel.com/api/users.php`, {})
      .pipe(map(res=>res.json()))
      // .catch(this.handleError);
  
  }
//   public getHeaders(read:boolean){
//     let headers = new Headers();
//     if (read)
//         headers.append('Accept', 'application/json');
//     else
//         headers.append('Content-Type', 'application/json');
//     return headers;
// }
public handleError (error: any) {
    let errorMsg = error.message || `Yikes! There was a problem with our API Service and we couldn't retrieve your data!`
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

    public initializeCustomer(): User{
    let user = <User> ({
      UserID: null,
      Name: null,
      Email: null,
      Address:null,
      City:  null,
      State:  null,
      Country:  null,
      UserName:  null,
      Password:  null,
      Role:  null,
      Mobile:null,
    });
    return user;
  }
    public  createCustomer(customer: User): Observable<User> {
    return   this._http
      .post(this.url,JSON.stringify(customer), {})
      .pipe(map(res => res.json()))
      // .catch(this.handleError);
    
  }
  // public  editCustomer(customer: User): Observable<User> {
  //   let usr$=this._http
  //     .put(this.url,JSON.stringify(customer), {headers:this.headers1})
  //     .map(res => res.json())
  //     .catch(this.handleError);
  //   return usr$;
  // }

  // public deleteCustomer(UserID: number): Observable<User> {
  //   const url = `${this.url}?UserID=${UserID}`;
  //   let ret$ =  this._http
  //     .delete(url, {headers:this.headers1})
  //     .do(() => null)
  //      .catch(this.handleError);
  //   return ret$;
  // }

  

}

  





//   public  createUser(user: User): Observable<User> {
//     let headers1 = new Headers({ 'Content-Type': 'application/json' });
//     const url = `${myGlobals.baseAPIUrl}/users`;\
//     let usr$=this._http
//       .post(url,JSON.stringify(user), {headers:headers1})
//       .map(res => res.json())
//       .catch(this._gs.handleError);
//     return usr$;
//   }

//   public updateUser(user: User): Observable<User> {
//     let headers1 = new Headers({ 'Content-Type': 'application/json' });
//     const url = `${myGlobals.baseAPIUrl}/users/${user.UserID}`;
//     let usr$=this._http
//       .put(url,JSON.stringify(user),{headers:headers1})
//       .map(res => res.json())
//       .catch(this._gs.handleError)
//     return usr$;
//   }

 


//#region support functions
// function mapsocialUser(user:any,id:number):SocialUser{
//   return tosocialUser(user,id);
// }

// function mapUsers(response:Response): User[]{
//   return response.json().map(toUser);
// }

// function toUser(r:any): User{
//   let user = <User>({
//     UserID:Number.parseInt(r.UserID),
//     DOB:r.DOB,
//     IsActive:r.IsActive,      
//     UserName: r.UserName,
//     Password: r.Password,
//     Address: r.Address,
//     city: r.city,
//     State: r.State,
//     RoleID: r.RoleID,
//     CreatedDate: r.CreatedDate,
//     Ipaddress: r.Ipaddress,
//     emailID: r.emailID,
//     MobilePhone: r.MobilePhone,
//     OTP: r.OTP,
//     Zipplus4: r.Zipplus4,
//     ZipCode: r.ZipCode,
//     FName: r.FName,
//     LName: r.LName,
//     MInitial: r.MInitial,
//     LastUpdatedDate:r.LastUpdatedDate
//   });
//   return user;
// }


//#endregion