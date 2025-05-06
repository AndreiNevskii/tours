import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';



@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

     @Get()
      getAllUsers(): string {
        return this.usersService.getAllUsers();
      }
    
    @Get(":id")
      getUserById(@Param() param): string {
        return this.usersService.getUserById(param);
      }
    
      @Post() 
      sendUser(): string {
        return this.usersService.sendUser();
      }
    
      @Put() 
      updateUsers(): string {
        return this.usersService.updateUsers();
      }
    
       @Delete() 
       deleteUsers(): string {
         return this.usersService.deleteUsers();
       }

       @Delete(":id")
       deleteUserById(@Param('id') id): string {
         return this.usersService.deleteUserById(id);
       }
 }
