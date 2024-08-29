export type RespExampleType = {
  id: number;
  version: string;
  envVal: string;
};
interface UserDTO {
  name: string;
  email: string;
  role: string;
}

export type JWTpayload = {
  id: string;
};

interface authResponse {
  user: UserDTO;
  token: string;
}
