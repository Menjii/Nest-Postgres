import { TasksService } from './tasks.service.js';
import { Task } from './interfaces/task.interface.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getTasks(): Task[];
    getTaskById(id: string): Task;
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTask(id: string, upodateTaskDto: UpdateTaskDto): Promise<Task>;
    deleteTask(id: string): Promise<void>;
}
