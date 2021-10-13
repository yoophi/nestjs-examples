import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTodoDto } from './dto/create-todo';

@Controller('todos')
export class TodosController {
  @Get()
  getTodos() {
    return [];
  }

  @Get(':todoId')
  getTodoDetail(@Param('todoId') todoId: string) {
    return {
      id: todoId,
      title: 'sample todo',
      completed: false,
    };
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return {
      id: uuid(),
      ...createTodoDto,
    };
  }

  @Delete(':todoId')
  deleteTodo(@Param('todoId') todoId: string) {
    return {};
  }
}
