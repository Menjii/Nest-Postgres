import { Task } from './interfaces/task.interface.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
export declare class TasksService {
    private tasks;
    getTasksTable(): Task[];
    create(createTaskDto: CreateTaskDto): {
        id: `${string}-${string}-${string}-${string}-${string}`;
        title: string;
        description: string | undefined;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    };
    update(id: string, updateTaskDto: UpdateTaskDto): Task;
    delete(id: string): void;
}
