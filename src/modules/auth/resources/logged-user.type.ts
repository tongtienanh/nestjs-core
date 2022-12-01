import { EAccountType } from 'src/modules/users/constants/user.enum';
export interface ILoggedInUser {
  userId: number;
  permissions: string[];
  fullName: string;
  username: string;
  accountType: EAccountType;
}
