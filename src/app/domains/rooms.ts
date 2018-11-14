export interface Room {
    RID: number;
    RCatID: number;
    RSCatID: number;
    CapID: number;
    Rent:number;
    RentWithoutGST:number;
    Room_No: number;
    Image: Image[];
    BookedYN: boolean;
    childrens: number;
    Adults: number;

}

export interface Image {
    ID: string;
    Name: string;
    RID: string;
}