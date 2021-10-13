import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { CreateTodoDto } from './dto/create-todo';
import { Todo } from './todo.entity';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepoistory: TodoRepository,
  ) {}

  createTodo(createTodoDto: CreateTodoDto) {
    return this.todoRepoistory
      .create({
        id: uuid(),
        ...createTodoDto,
      })
      .save();
  }

  getTodoDetail(todoId: string) {
    return this.todoRepoistory.findOne(todoId);
  }

  getTodoList() {
    return this.todoRepoistory.find({
      select: ['id', 'title', 'completed'],
    });
  }

  deleteTodo(todoId: string) {
    return this.todoRepoistory.delete(todoId);
  }
}
