import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { ProcessInstance } from 'src/app/models/processInstance';

@Component({
  selector: 'app-process-info',
  templateUrl: './process-info.component.html',
  styleUrls: ['./process-info.component.css']
})
export class ProcessInfoComponent {

  private client :HttpClient;
  processInstances: ProcessInstance[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.client = http;
    const key:any = route.snapshot.paramMap.get('key');
    this.initProcessInfo(key);
  }

  initProcessInfo(key: string):void {
    this.client.post<ProcessInstance[]>('http://localhost:8080/engine-rest/history/process-instance', {processDefinitionKey: key})
    .subscribe((data: ProcessInstance[]) => {
      this.processInstances = data;
    });
  }

}


