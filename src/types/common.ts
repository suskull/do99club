export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  'base-100': string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

export interface IPost {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
