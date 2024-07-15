import axios from '../api/axios';
import {Credentials} from './Interfaces/AuthInterfaces';

export class AuthService {
  static #LOGIN_ENDPOINT = '/auth/login';
  static #CREATE_ACCOUNT_ENDPOINT = '/auth/create-account';

  static async login(credentials: Credentials) {
    try {
      const res = await axios.post(AuthService.#LOGIN_ENDPOINT, credentials);
      return res.data;
    } catch (err: any) {
      console.log(err.toJSON(), 'Err');
    }
  }
}
