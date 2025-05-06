import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class UsersService {
   
        getAllUsers(): string {
          return "all users";
        }
      
      
        getUserById(param): string {
          return "user id is " + param.id;
        }
      
     
        sendUser(): string {
          return "user post data";
        }
      
       
        updateUsers(): string {
          return "user put data";
        }
      
   
         deleteUsers(): string {
           return "all users data delete";
         }
  
     
         deleteUserById(id: string): string {
           return "user delete is " +id;
         }

}
