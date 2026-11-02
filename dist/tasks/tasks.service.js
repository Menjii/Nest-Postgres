var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
let TasksService = class TasksService {
    tasks = [
        {
            id: "550e8400-e29b-41d4-a716-446655440000",
            title: "Learn NestJS",
            description: "Learn controllers and services",
            completed: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ];
    getTasksTable() {
        return this.tasks;
    }
    create(createTaskDto) {
        const uuid = randomUUID();
        const currentDate = new Date();
        const newTask = {
            id: uuid,
            title: createTaskDto.title,
            description: createTaskDto.description,
            completed: false,
            createdAt: currentDate,
            updatedAt: currentDate,
        };
        this.tasks.push(newTask);
        return newTask;
    }
    update(id, updateTaskDto) {
        const task = this.tasks.find((task) => task.id === id);
        if (!task) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        Object.assign(task, updateTaskDto, {
            updatedAt: new Date(),
        });
        return task;
    }
    delete(id) {
        const tasks = this.tasks;
        const findTask = tasks.find((task) => task.id === id);
        if (!findTask)
            throw new NotFoundException(`Task with ID "${id}" not found`);
        const modifiedTasks = tasks.filter((task) => task.id !== id);
        this.tasks = modifiedTasks;
    }
};
TasksService = __decorate([
    Injectable()
], TasksService);
export { TasksService };
//# sourceMappingURL=tasks.service.js.map