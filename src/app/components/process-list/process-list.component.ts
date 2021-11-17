import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/models/process';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.css']
})
export class ProcessListComponent implements OnInit {

  processes: Process[] = [];
  
  constructor(private http: HttpClient) { 
    const queryParams = new HttpParams().set('latestVersion', true);
    http.get<Process[]>('http://localhost:8080/engine-rest/process-definition', {params: queryParams})
    .subscribe((data: Process[]) => {
      this.processes = data;
    });
  }

  ngOnInit(): void {
  }

}
