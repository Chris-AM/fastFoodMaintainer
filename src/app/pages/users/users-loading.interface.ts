import { User } from 'src/app/models/user.model';

export interface LoadUsers {
  totalDocs: number;
  docs: User[];
}
