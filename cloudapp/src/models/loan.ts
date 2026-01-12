import { DatePipe } from "@angular/common";

export interface Loan {
  author: string;
  call_number: string;
  circ_desk: ValueString;
  due_date: DatePipe;
  item_barcode: string;
  library: ValueString;
  loan_date: DatePipe;
  title: string;
  user_id: string;
}

export interface ValueString{
  value: string;
  desc: string;
}