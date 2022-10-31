import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api=`https://jsonplaceholder.typicode.com`;
  constructor(
    //se inyecta http
    private http: HttpClient

  ) { }
  //creacion de una peticion GeT
  getAllTasks(){
    const path=`${this.api}/todos`;
    return this.http.get<Task[]>(path);
  }
  getTask(id:string){
    const path=`${this.api}/todos/${id}`;
    return this.http.get<Task>(path);
  }
  // creacion de una peticion post para adicionar elementos 
  createTask(task: Task){
    const path= `${this.api}/todos`;
    return this.http.post(path,task);
  }  
  // creacion de la peticion put para actualizar las propiedades elementos
  updateTask(task:Task){
    const path=`${this.api}/todos/${task.id}`;
    return this.http.put<Task>(path,task);
  }
  //borrar un dato
  deleteTask(id:string){
    const path=`${this.api}/todos/${id}`;
    return this.http.delete(path);
  }
  }
