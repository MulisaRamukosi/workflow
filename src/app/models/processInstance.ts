export interface ProcessInstance{
    id: string;
    businessKey?: any;
    processDefinitionId: string;
    processDefinitionKey: string;
    processDefinitionName?: any;
    processDefinitionVersion: number;
    startTime: Date;
    endTime?: any;
    removalTime?: any;
    durationInMillis?: any;
    startUserId?: any;
    startActivityId: string;
    deleteReason?: any;
    rootProcessInstanceId: string;
    superProcessInstanceId?: any;
    superCaseInstanceId?: any;
    caseInstanceId?: any;
    tenantId?: any;
    state: string;
}