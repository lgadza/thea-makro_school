
export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ApplicantRegistration{
  first_name:string;
  last_name:string;
  second_name?:string;
  date_of_birth:string;
  gender:string;
  citizenship:string;
  street:string;
  building_number:string;
  apartment_number?:string;
  postal_code?:string;
  city:string;
  province:string;
  country:string;
  phone_number:string;
  email?:string;
  policy_acceptance:string;
  data_process_acceptance:string;
  password:string;
  settlement_type:string
}