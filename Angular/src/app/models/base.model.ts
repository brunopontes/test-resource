import { Injectable } from "@angular/core";

@Injectable()
export class BaseModel {
  constructor(
    public Data: any,
    public Success: boolean,
    public Errors: any[]
  ) {}
}
