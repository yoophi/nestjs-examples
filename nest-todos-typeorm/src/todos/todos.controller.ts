import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getTodoList();
  }

  @Get(':todoId')
  getTodoDetail(@Param('todoId') todoId: string) {
    return this.todosService.getTodoDetail(todoId);
  }

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.createTodo(createTodoDto);
  }

  @Delete(':todoId')
  deleteTodo(@Param('todoId') todoId: string) {
    return this.todosService.deleteTodo(todoId);
  }
}
