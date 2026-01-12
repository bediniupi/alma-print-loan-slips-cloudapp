import { FormGroup, FormControl, FormArray } from "@angular/forms"
import { FormGroupUtil } from "@exlibris/exl-cloudapp-angular-lib"

export interface Config {
  profiles: {[key: string]: Profile}
}

export interface Profile {
  two_columns: boolean;
  display_authors: boolean;
  institution_logo: string;
  styles: {
    body: string;
    table: string;
    institution_logo: string;
    institution: string;
    library: string;
    title: string;
    user: string;
    loans: string;
    signature: string;
  },
  labels: {
    slip_title: string;
    institution_name: string;
    date_format: string;
    signature: string;
    date_text: string;
  },
  order: string[]
}

export const ORDER_FIELDS = [ 'logo', 'inst_name', 'library_name', 'title', 'patron', 'loan_list', 'signature'];

export const defaultProfile: Profile = {
  two_columns: false,
  display_authors: true,
  institution_logo: "",
  labels: {
    slip_title: "Loan receipt",
    institution_name: "[MyInstitution]",
    date_format:  "dd/MM/yyyy",
    signature: "Signature ______________________",
    date_text: "Date"
  },
  styles: {
    body: "font-family: Arial, Helvetica, sans-serif;",
    table: "border:1px solid black; border-collapse: collapse; padding: 5px; margin-bottom: 10px;",
    institution_logo: "width:100px;",
    institution: "font-size: medium;",
    library: "font-size: medium;",
    title: "padding-top:10px; font-size: large;",
    user: "font-size: small; font-weight:bold;",
    loans: "padding-top: 20px;",
    signature: "padding-top:50px;",
  },
  order: ORDER_FIELDS
}


export const defaultConfig: Config = {
  profiles: {default: defaultProfile}
}


export const profileFormGroup = (profile: Profile = defaultProfile) => FormGroupUtil.toFormGroup(profile);
export const configFormGroup = (config: Config) => FormGroupUtil.toFormGroup(config);
