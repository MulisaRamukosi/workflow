import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskHistory } from 'src/app/models/taskHistory';

@Component({
  selector: 'app-process-instance-tasklist-history',
  templateUrl: './process-instance-tasklist-history.component.html',
  styleUrls: ['./process-instance-tasklist-history.component.css']
})
export class ProcessInstanceTasklistHistoryComponent {

  private client :HttpClient;
  taskListHistory: TaskHistory[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.client = http;
    route.params.subscribe(routeParams => {
      const processId:any = routeParams['processInstanceId'];

      this.initTaskHistory(processId);
    });

    
  }

  initTaskHistory(processInstanceId: string) : void{
    const queryParams = new HttpParams().set('processInstanceId', processInstanceId);
    this.client.get<TaskHistory[]>('http://localhost:8080/engine-rest/history/task', {params: queryParams})
    .subscribe((data: TaskHistory[]) => {
      this.taskListHistory = data;
    });
  }
}
