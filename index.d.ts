// Type definitions for @sap/hdbext
// Project: https://github.com/kulyk/hdbext
// Definitions by: Nazar Kulyk <https://github.com/kulyk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 3.0.1

import { Client } from "@sap/hdbext";

declare module "@sap/hdbext" {
  export type HanaService = {
    host: string;
    port: number | string;
    assertion?: string;
    user?: string;
    password?: string;
  };

  export type ConnectionOptions = {
    name: string;
  };

  export type ConnectionCallback = (error: Error, client: Client) => void;

  export function getPool(hanaService: HanaService, options: any): any;
  export function createPool(hanaService: HanaService, options: any): any;
  export function loadProcedure(): any;

  export function middleware(
    hanaService: HanaService,
    poolOptions: any
  ): (req: any, res: any, next: any) => void;

  export function createConnection(
    options: ConnectionOptions,
    callback: ConnectionCallback
  ): void;

  export function updateConnectionOptions(
    client: Client,
    options: ConnectionOptions,
    callback: ConnectionCallback
  ): any;

  export const connectionOptions: any;
}
