import { Injectable } from '@angular/core';
import { Booklist } from '../domains/booklist';
// import { User } from 'app/domain/user';
// import { W4 } from '../domain/w4'


@Injectable()
export class StorageService {
    public scope: Booklist | boolean = false;
    constructor() {
    }
    
    public getScope(): Booklist | boolean {
        return this.scope;
    }
    public setScope(scope: Booklist): void {
        this.scope = scope;
    }
}