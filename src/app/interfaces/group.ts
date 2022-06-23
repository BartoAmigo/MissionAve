import {GroupEvent} from "./event";

export interface Group {
  groupId:number;
  groupName:string;
  groupEvents?:GroupEvent[];
}
