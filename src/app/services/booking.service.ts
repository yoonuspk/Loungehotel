import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';
// import { Booking } from "app/domain/bookings";
// import { User } from 'app/domain/user';
import { Booking } from '../domains/bookings';
import { User } from '../domains/user';
import { Observable } from 'rxjs';

/**
 * @description
 * @class
 */
@Injectable()
export class BookingService {
  

  constructor(
    private _http: Http)  {
    
  }

  public getUserById(id): Observable<User>{
    return this._http
    .get(`http://theloungehotel.com/api/users.php?ID=${id}`, { headers: this.getHeaders(true)})
    .pipe(map(res=>res.json()));
  }

  public getAllRooms(): Observable<Booking[]>{
    return this._http
      .get(`http://theloungehotel.com/api/bookings.php`, { headers: this.getHeaders(true)})
      .pipe(map(res=>res.json()));
    // return booking$;
  }
  


  public bookrooms(id): Observable<Booking[]>{
    return this._http
      .post(`http://theloungehotel.com/api/bookings.php`,JSON.stringify(id), { headers: this.getHeaders(true)})
      .pipe(map(res=>res.json()));
    // return booking$;
  }

  public getHeaders(read:boolean){
    let headers = new Headers();
    if (read)
        headers.append('Accept', 'application/json');
    else
        headers.append('Content-Type', 'application/json');
    return headers;
}

public handleError (error: any) {
    let errorMsg = error.message || `Yikes! There was a problem with our API Service and we couldn't retrieve your data!`
    console.error(errorMsg);
    return Observable.throw(errorMsg);
  }

}
