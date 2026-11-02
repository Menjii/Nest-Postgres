import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './interfaces/task.interface.js';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';

@Injectable()
export class TasksService {
    
    private tasks: Task[] = [
        {
          id: "550e8400-e29b-41d4-a716-446655440000",
          title: "Learn NestJS",
          description: "Learn controllers and services",
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]

    findAll() {
        return this.tasks
    }

    findOne(id: string) {
      
        const task = this.tasks.find((tk) => tk.id === id)

        if(!task)
            throw new NotFoundException(`Task with ID "${id}" not found`);
        
        return task
    }

    create(createTaskDto: CreateTaskDto) {
        const uuid = randomUUID()
        const currentDate = new Date()
        const newTask: Task = {
            id: uuid,
            title: createTaskDto.title,
            description: createTaskDto.description,
            completed: false,
            createdAt: currentDate,
            updatedAt: currentDate,
        }
        
        this.tasks.push(newTask)
        return newTask
    }

    update(id: string, updateTaskDto: UpdateTaskDto) {
        const task = this.tasks.find((task) => task.id === id);
      
        if (!task) {
          throw new NotFoundException(`Task with ID "${id}" not found`);
        }
      
        Object.assign(task, updateTaskDto, {
          updatedAt: new Date(),
        });
      
        return task;
      }

    delete(id: string): void {
        const tasks = this.tasks
        const findTask = tasks.find((task) => task.id === id)

        if (!findTask)
            throw new NotFoundException(`Task with ID "${id}" not found`);

        const modifiedTasks = tasks.filter((task) => task.id !== id)

        this.tasks = modifiedTasks
    }

}
