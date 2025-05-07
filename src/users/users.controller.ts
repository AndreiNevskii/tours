import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '../schemas/user';
import { UsersService } from 'src/services/users/users.service';



@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

     @Get()
      getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
      }
    
    @Get(":id")
      getUserById(@Param('id') id): Promise<User> {
        return this.userService.getUserById(id);
      }
    
      @Post() 
      sendUser(@Body() data): Promise<User> {
        return this.userService.sendUser(data);
      }
    
      @Put(":id") 
      updateUsers(@Param('id') id, @Body() data): Promise<User> {
        return this.userService.updateUsers(id, data);
      }
    
       @Delete() 
       deleteUsers(): Promise<User> {
         return this.userService.deleteUsers();
       }

       @Delete(":id")
       deleteUserById(@Param('id') id): Promise<User> {
         return this.userService.deleteUserById(id);
       }
 }
