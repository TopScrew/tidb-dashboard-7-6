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



/**
 * 
 * @export
 * @interface TopologyStoreInfo
 */
export interface TopologyStoreInfo {
    /**
     * 
     * @type {string}
     * @memberof TopologyStoreInfo
     */
    'deploy_path'?: string;
    /**
     * 
     * @type {string}
     * @memberof TopologyStoreInfo
     */
    'git_hash'?: string;
    /**
     * 
     * @type {string}
     * @memberof TopologyStoreInfo
     */
    'ip'?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TopologyStoreInfo
     */
    'labels'?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof TopologyStoreInfo
     */
    'port'?: number;
    /**
     * 
     * @type {number}
     * @memberof TopologyStoreInfo
     */
    'start_timestamp'?: number;
    /**
     * 
     * @type {number}
     * @memberof TopologyStoreInfo
     */
    'status'?: number;
    /**
     * 
     * @type {number}
     * @memberof TopologyStoreInfo
     */
    'status_port'?: number;
    /**
     * 
     * @type {string}
     * @memberof TopologyStoreInfo
     */
    'version'?: string;
}

