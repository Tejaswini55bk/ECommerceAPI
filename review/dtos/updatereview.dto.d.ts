import { CreateReviewDto } from './createreview.dto';
declare const UpdateReviewDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateReviewDto>>;
export declare class UpdateReviewDto extends UpdateReviewDto_base {
    id: number;
    ratings: number;
    comments: string;
}
export {};
