export interface User {
  first_name: string;
  last_name: string;
  full_name: string;
  pref_first_name: string;
  pref_middle_name: string;
  pref_last_name: string;
  primary_id: string;  
  preferred_full_name?: string;
}