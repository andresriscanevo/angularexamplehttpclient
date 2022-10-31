import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularexamplehttpclient';
  //Se inyecta en el constructor 
  constructor(
    private taskService:TaskService
  ){}
  //llamdado del servicio task 
  getAllTasks(){
    //al devolver un observable realizamos la suscripcion
    this.taskService.getAllTasks().subscribe(tasks=>{
      console.log(tasks);
    });
  }
  getTask(){
    this.taskService.getTask('2').subscribe(task=>{
      console.log(task);
    });
  }
  //creacion de la tarea a crear
  createTask(){
    const task = {
      id:'12',
      userId:'1',
      title:'hola soy nuevo',
      completed:true
    };
    this.taskService.createTask(task).subscribe((newTask)=>{
      console.log(newTask);
    });
  }
  //modificar un elemento 
  updateTask(){
    const task={
      id:'2',
      userId:'1',
      title:'este titulo se cambio ',
      completed:true
    }
    this.taskService.updateTask(task).subscribe(todo=>{
      console.log(todo);
    });
  }
  //borrar un elemento
  deleteTask(){
    this.taskService.deleteTask('1').subscribe((data)=>{console.log(data);});
  }
}
