import { LoginRequest } from './../requests/login.request';

export interface AuthService {
    login(request: LoginRequest)
}
export const AuthService = Symbol("AuthService");