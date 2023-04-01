import { JwtAuthGuard } from './auth.guard';
import { Body, Controller, Get, Post, Delete, Param, Put, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';
import { LogincarteDto } from './dto/loginCarte.dts';

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
  async getAllBooks(): Promise<User[]> {
    return this.authService.findAll();
  }

  @Get(':id')
  async getBook(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.authService.findById(id);
  }

/*   @Patch(':id')
  update(@Param('id') id: string, @Body() updateClimatDto: UpdateClimatDto) {
     return this.authService.updateById(id, updateClimatDto);
  }
 */

  @Delete(':id')
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.authService.deleteById(id);
  }
}