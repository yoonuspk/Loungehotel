import { Injectable } from "@angular/core";
import { Http, Response, Headers} from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Room } from "../domains/rooms";

/**
 * @description
 * @class
 */
@Injectable()
export class RoomsService {

  constructor(
    private _http: Http) {
    
  }

  public getAllRooms():Observable<Room[]> {
    return this._http.get(`http://theloungehotel.com/api/rooms.php`, {})
                     .pipe(map(res=>res.json()));
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
}
