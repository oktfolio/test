export interface AuthenticationToken {

}

export interface UsernamePasswordAuthenticationToken extends AuthenticationToken {
  username: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
}

export interface PhoneVerificationCodeAuthenticationToken extends AuthenticationToken {
  phone: string;
  code: string;
}

export interface EmailVerificationCodeAuthenticationToken extends AuthenticationToken {
  email: string;
  code: string;
}

export interface IAuthenticator {
  authenticate(authentication: AuthenticationToken): void;
}

export class UsernamePasswordAuthenticator implements IAuthenticator {

  authenticate(authentication: UsernamePasswordAuthenticationToken): void {
  }

}

export class PhoneVerificationCodeAuthenticator implements IAuthenticator {

  authenticate(authentication: UsernamePasswordAuthenticationToken): void {
  }

}

export class EmailVerificationCodeAuthenticator implements IAuthenticator {

  authenticate(authentication: UsernamePasswordAuthenticationToken): void {
  }

}
