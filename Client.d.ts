declare module "@sap/hdbext" {
  export type ExecCallback = (error: Error, rows: any[]) => void;
  export class Client {
    public exec(x: any, res: ExecCallback): any;
    public close(): void;
  }
}
