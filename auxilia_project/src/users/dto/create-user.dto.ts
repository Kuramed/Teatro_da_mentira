import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
 @ApiProperty({ example: 'joao@email.com', description: 'O email do usuario' })
 @IsEmail()
 email: string;
 @ApiProperty({ example: 'Joao Silva', description: 'Nome completo' })
 @IsString()
 @IsNotEmpty()
 name: string;
 @ApiProperty({ example: 'senha123', description: 'Senha com no minimo 6 caracteres', minLength: 6 })
 @IsString()
 @MinLength(6)
 password: string;
}
