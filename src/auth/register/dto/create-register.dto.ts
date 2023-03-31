
import { IsNotEmpty } from "class-validator";
import { LoginDto } from "src/auth/login/dto/create-login.dto";


export  class UserRegisterDto extends LoginDto
 {


    @IsNotEmpty()
    first_name:string;


    @IsNotEmpty()
    last_name:string;

    

}