export type status = 'ALL' | 'DONE' | 'ARCHIVED';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  topic?: string;
  completed: boolean;
}
