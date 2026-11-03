import { IsBoolean, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { CreateTaskDto } from "./create-task.dto.js";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @IsBoolean()
    @IsOptional()
    completed?: boolean
}