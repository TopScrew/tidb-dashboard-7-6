/* tslint:disable */
/* eslint-disable */
/**
 * Dashboard API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { LogsearchTaskGroupModel } from './logsearch-task-group-model';
import { LogsearchTaskModel } from './logsearch-task-model';

/**
 * 
 * @export
 * @interface LogsearchTaskGroupResponse
 */
export interface LogsearchTaskGroupResponse {
    /**
     * 
     * @type {LogsearchTaskGroupModel}
     * @memberof LogsearchTaskGroupResponse
     */
    'task_group'?: LogsearchTaskGroupModel;
    /**
     * 
     * @type {Array<LogsearchTaskModel>}
     * @memberof LogsearchTaskGroupResponse
     */
    'tasks'?: Array<LogsearchTaskModel>;
}

