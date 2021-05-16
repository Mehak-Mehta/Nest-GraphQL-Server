import { Model } from 'mongoose';
import { Cat } from './interfaces/cats.interface';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsService {
    private catModel;
    constructor(catModel: Model<Cat>);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findAll(): Promise<Cat[]>;
}
