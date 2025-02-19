import { JwtPayload } from 'jwt-decode';

interface DefaultResponse {
  status: {
    code: number,
    response: string,
    message: string,
  };
  // result: GtkEntity[] |
  //         UserEntity |
  //         string
  result: any
}

interface RoleType extends JwtPayload {
  role: string
}

export type { DefaultResponse, RoleType }