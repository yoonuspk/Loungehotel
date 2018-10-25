export interface RoomType {
    RID: number;
    RCatID: number;
    RSCatID: number;
    Rent: number;
    CapID: number;
    RoomCount: number;
}

export interface Room {
    RID: number;
    RCatID: number;
    RSCatID: number;
    Rent: number;
    CapID: number;
    RoomCount: number;
    Image: Image[];
}

export interface Image {
    ID: string;
    Name: string;
    RID: string;
}