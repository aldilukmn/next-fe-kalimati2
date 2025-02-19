import { DefaultResponse } from '../response/default-response';

export default class DataGtk {
  static baseUrl: string = 'https://api-uptdsdn2kalimati.vercel.app/api/v1/gtk';

  static async getGtk () {
    const response = await fetch(
      `${this.baseUrl}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const data: DefaultResponse = await response.json();
    return data;
  }
}