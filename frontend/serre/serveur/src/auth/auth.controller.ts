import { JwtAuthGuard } from './auth.guard';
import { Body, Controller, Get, Post, Delete, Param, Put, UseGuards, Patch } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';
import { UpdateDto } from './dto/update.dto';
import { LogincarteDto } from './dto/loginCarte.dts';
import { UpdateEmployeeDto } from './dto/updateUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string, id: string }> {
    return this.authService.login(loginDto);
  }
//mis à jour to be merged MHDLamine->DEV
  @Post('/logincarte')
  logincarte(@Body() logincarteDto: LogincarteDto): Promise<{ token: string, id: string }> {
    return this.authService.logincarte(logincarteDto);
  }

  //@UseGuards(JwtAuthGuard)
  @Get('/getAll')
  async getAllUsers(): Promise<User[]> {
    return this.authService.findAll();
  }

  @Get(':id')
  async getUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.authService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() signUpDto: SignUpDto) {
    return this.authService.update(id, signUpDto);
  }

  @Delete(':id')
  async deleteUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.authService.deleteById(id);
  }
}