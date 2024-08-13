import { ReviewsService } from './review.service';
import { CreateReviewDto } from './dtos/createreview.dto';
import { UpdateReviewDto } from './dtos/updatereview.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewDto): Promise<import("./review.entity").Review>;
    findAllreview(): Promise<import("./review.entity").Review[]>;
    findOnerev(id: string): Promise<import("./review.entity").Review>;
    update(body: UpdateReviewDto): Promise<[affectedCount: number] | "no such review with this id exists">;
    remove(id: string): Promise<string | number>;
}
