export interface IAuthenticationDialogData {
    email: string;
    password: string;
    rememberMe: boolean;
    status?: undefined | 'LOGGING_IN' | 'SUCCESS' | 'ERROR' | 'SENDING_CODE';
    error?: undefined | string;
  };
  