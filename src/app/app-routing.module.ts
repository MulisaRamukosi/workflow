import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessInfoComponent } from './components/process-info/process-info.component';
import { ProcessInstanceTasklistHistoryComponent } from './components/process-instance-tasklist-history/process-instance-tasklist-history.component';
import { ProcessListComponent } from './components/process-list/process-list.component';

const routes: Routes = [
  {path: '', component: ProcessListComponent},
  {path: ':key/info', component: ProcessInfoComponent,
  children: [
    {path: ':processInstanceId/tasklisthistory', component: ProcessInstanceTasklistHistoryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
