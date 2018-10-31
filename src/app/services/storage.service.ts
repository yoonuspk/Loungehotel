import { Injectable } from '@angular/core';
import { Booklist } from '../domains/booklist';
import { Category, SubCategory } from '../domains/category';


@Injectable()
export class StorageService {
    public scope: Booklist | boolean = false;
    
    public scopeCat: Category[] | boolean = false;

    public scopeSCat: SubCategory[] | boolean = false;

    constructor() {
    }
    
    public getScope(): Booklist | boolean {
        return this.scope;
    }
    public setScope(scope: Booklist): void {
        this.scope = scope;
    }
    
    public getScopeCat(): Category[] | boolean {
        return this.scopeCat;
    }
    public setScopeCat(scopeCat: Category[]): void {
        this.scopeCat = scopeCat;
    }
    
    public getScopeSCat(): SubCategory[] | boolean {
        return this.scopeSCat;
    }
    public setScopeSCat(scopeSCat: SubCategory[]): void {
        this.scopeSCat = scopeSCat;
    }
}