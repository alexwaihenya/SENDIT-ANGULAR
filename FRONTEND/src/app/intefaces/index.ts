export interface LoginDetails {
  email: string;
  password: string;
}
export interface LoginResponse {
  message: string;
  role: string;
  name: string;
  token: string;
  error: boolean;
}

export interface UserDetail {
  role: string;
  names: string;
}

export interface UpdateResponse {
  message: string;
}

export interface IParcel {
  parcel_id: number;
  senderemail: string;
  receiveremail: string;
  parcel_desc: string;
  fromLoc: string;
  fromLat:number;
  fromLong:number;
  toLoc: string;
  toLat:number;
  toLong:number;
  status: string;
  dispatch_date: string;
  delivery_date: string;
  weight: number;
  price: number;
}

// export interface Location {
//   address: string;
//   latitute?: number;
//   longitude?: number;
// }
