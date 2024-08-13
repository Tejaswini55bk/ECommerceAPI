import { CreateReviewDto } from './dtos/createreview.dto';
import { UpdateReviewDto } from './dtos/updatereview.dto';
import { Review } from './review.entity';
export declare class ReviewsService {
    private repos;
    constructor(repos: typeof Review);
    create(createReviewDto: Partial<CreateReviewDto>): Promise<Review>;
    findAll(): Promise<Review[]>;
    findOne(id: number): Promise<Review>;
    update(updateReviewDto: Partial<UpdateReviewDto>): Promise<[affectedCount: number] | "no such review with this id exists">;
    remove(id: number): Promise<string | number>;
}
