import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    @MaxLength(500)
    description?: string;
}