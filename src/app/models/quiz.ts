import  { Option } from './option';
export interface Quiz {
    id: number;
    questionText: string;
    options: Option[];
    answered: boolean;
  }