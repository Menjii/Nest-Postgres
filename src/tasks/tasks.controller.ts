import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { Task } from './interfaces/task.interface.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getTasks(): Task[] {
        return this.tasksService.findAll();
    }

    @Get(':id')
    getTaskById(@Param('id') id: string) {
        return this.tasksService.findOne(id)
    }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto){
        return this.tasksService.create(createTaskDto)
    }

    @Patch(':id')
    async updateTask(@Param('id') id: string, @Body() upodateTaskDto: UpdateTaskDto){
        return this.tasksService.update(id, upodateTaskDto)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    async deleteTask(@Param('id') id: string){
        return this.tasksService.delete(id)
    }

}
