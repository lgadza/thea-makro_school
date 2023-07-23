
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
  phone_number:string;
  email:string;
  policy_acceptance:boolean;
  data_process_acceptance:boolean;
  password:string;
  country_code:string;
}
export interface PersonalDataInterface{
  first_name:string;
  last_name:string;
  second_name?:string;
  date_of_birth:string;
  gender:string;
  phone_number:string;
  email:string;
  country_code:string;
  citizenship:string;
  
}
export interface AddressInterface{
  street:string;
  building_number:string;
  apartment_number:string;
  postal_code:string;
  province:string;
  country:string;
  email:string;
  settlement_type:string;
  city:string;
  
}
export interface GuardianInterface {
  first_name:string;
  last_name:string;
  phone_number:string;
  email?:string;
  country_code:string;
  relationship:string;
  
  
}