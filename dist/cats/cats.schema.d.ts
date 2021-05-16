import { Document } from 'mongoose';
export declare type CatDocument = Cat & Document;
export declare class Cat {
    name: string;
    age: number;
    breed: string;
}
export declare const CatSchema: import("mongoose").Schema<Document<Cat, any>, import("mongoose").Model<any, any, any>, undefined>;
