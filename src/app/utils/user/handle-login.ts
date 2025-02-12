import Methods from '@/app/helpers/methods';
import DefaultResponse from '../response/default-response';
import UserType from './type';

export default class handleUser {
  static baseUrl: string = 'https://user-service-kalimati2.vercel.app/api/users';
  static async doLogin(payload: UserType): Promise<DefaultResponse> {
    const response = await fetch(
      `${this.baseUrl}/login`, {
        method: Methods.POST,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        username: payload.username,
        password: payload.password
      }),
      credentials: 'include'
    }
    );
    const data = await response.json();
    return data;
  }
}