
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export  class LoginDto {


    @IsEmail()
    @IsNotEmpty()
    email: string;



    @MinLength(7)
    @IsNotEmpty()
    password: string;

    
}