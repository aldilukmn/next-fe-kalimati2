'use client'
import Methods from '@/app/helpers/methods';
import {DefaultResponse} from '../response/default-response';
import UserType from './type';

export default class handleUser {
  static baseUrl: string = 'user-service-kalimati2.vercel.app/api/users';
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
  static async doLogout () {
    try {
      const response = await fetch(
        `${this.baseUrl}/logout`, {
        method: Methods.POST,
        credentials: 'include'
          }
        );
      const data: DefaultResponse = await response.json();

      if (!response.ok) {
      throw new Error(`Logout gagal: ${response.status} ${response.statusText}`);
      }
      if (data.status.message === 'fail') {
        throw new Error(data.status.message);
      };
      sessionStorage.removeItem('auth_token');
      return data;
    } catch (e) {
      if (e instanceof Error) {
        console.error('❌ error :', e.message);
      }
    }
  }
}