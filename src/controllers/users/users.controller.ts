import {Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, UseGuards} from '@nestjs/common';
import RejectedValue = jest.RejectedValue;
import { UsersService } from 'src/services/users/users.service';
import { User } from 'src/schemas/user';
import { UserDto } from 'src/dto/user-dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuardService } from 'src/services/Authentification/jwt-auth.guard/jwt-auth.guard.service';
import { UserAuthPipe } from 'src/pipes/user-auth.pipe';
 
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
 

    // @UseGuards(JwtAuthGuardService) проверка работы guard
     @Post()
     sendUser(@Body() data: UserDto): Promise<User> {
 
         return this.userService.checkRegUser(data.login).then((queryRes) => {
             console.log('data reg', queryRes)
             if (queryRes.length === 0) {
                return this.userService.sendUser(data);
            } else {
                 console.log('err - user is exists')
                 // return Promise.reject();
                 throw new HttpException({
                  status: HttpStatus.CONFLICT,
                   errorText: 'Пользователь уже зарегистрирован'
                 }, HttpStatus.CONFLICT)
             }
         });
 
     }

    // @Post()
    // sendUser(@Body() data: UserDto): Promise<User> {
 
    //     return this.userService.checkRegUser(data.login).then((queryRes) => {
    //         console.log('data reg', queryRes)
    //         if (queryRes.length === 0) {
    //             return this.userService.sendUser(data);
    //         } else {
    //             console.log('err - user is exists')
    //             return Promise.reject();
    //         }
    //     });
 
    // }
 

    @UseGuards(AuthGuard('local'))
     @Post(":login")
     authUser(@Body(UserAuthPipe) data: UserDto, @Param('login') login): any {
       return this.userService.login(data); 
     } 



    // @Post(":login")
    // authUser(@Body() data: UserDto, @Param('login') login): Promise<User | boolean>  {
    //     return this.userService.checkAuthUser(data.login, data.password).then((queryRes) => {
    //         if (queryRes.length !== 0) {
    //              return this.userService.sendUser(data);
    //         } else {
    //             console.log('err - user is exists')
    //             // return Promise.reject();
    //             throw new HttpException({
    //               status: HttpStatus.CONFLICT,
    //               errorText: 'Пользователь не найден в базе'
    //             }, HttpStatus.CONFLICT)
    //         }
    //     });
 
    // }
    
 
    @Put(":id")
    updateUsers(@Param('id') id, @Body() data) : Promise<User> {
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