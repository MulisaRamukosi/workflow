export interface TaskHistory{
    id: string;
    processDefinitionKey: string;
    processDefinitionId: string;
    processInstanceId: string;
    executionId: string;
    caseDefinitionKey?: any;
    caseDefinitionId?: any;
    caseInstanceId?: any;
    caseExecutionId?: any;
    activityInstanceId: string;
    name: string;
    description?: any;
    deleteReason?: any;
    owner?: any;
    assignee?: any;
    startTime: Date;
    endTime?: any;
    duration?: any;
    taskDefinitionKey: string;
    priority: number;
    due?: any;
    parentTaskId?: any;
    followUp?: any;
    tenantId?: any;
    removalTime?: any;
    rootProcessInstanceId: string;
}