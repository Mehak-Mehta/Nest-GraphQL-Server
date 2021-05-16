import { CatsService } from './cats.servics';
import { CatInput } from './inputs/cats.input';
export declare class CatsResolvers {
    private readonly catsService;
    constructor(catsService: CatsService);
    hello(): Promise<string>;
    cats(): Promise<import("./interfaces/cats.interface").Cat[]>;
    createcat(input: CatInput): Promise<import("./interfaces/cats.interface").Cat>;
}
