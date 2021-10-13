import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTodoDto } from './dto/create-todo';

@Injectable()
export class TodosService {
  createTodo(createTodoDto: CreateTodoDto) {
    return {
      id: uuid(),
      ...createTodoDto,
    };
  }

  getTodoDetail(todoId: string) {
    return {
      id: todoId,
      title: 'sample todo',
      completed: false,
    };
  }

  getTodoList() {
    return [];
  }

  deleteTodo(todoId: string) {
    return {};
  }
}
