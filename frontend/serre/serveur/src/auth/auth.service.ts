import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./schemas/user.schema";
import * as bcrypt from "bcryptjs";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";
import { LogincarteDto } from "./dto/loginCarte.dts";
import { UpdateEmployeeDto } from "./dto/updateUser.dto";
import { response } from "express";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const { prenom, nom, matricule1, matricule2, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);
    //a mettre apres API
    const user = await this.userModel.create({
      prenom,
      nom,
      matricule1,
      matricule2,
      email,
      password: hashedPassword,
    });

    return user;
  }

  async login(loginDto: LoginDto): Promise<{ token: string; id: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException({ message: "Cet email n'existe pas" });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException({ message: "Mot de passe invalide" });
    }

    const id = user._id;

    const token = this.jwtService.sign({ id: user._id });

    return { token, id };
  }
  //mis à jour to be merged MHDLamine->DEV
  async logincarte(
    logincarteDto: LogincarteDto
  ): Promise<{ token: string; id: string }> {
    const { matricule1, matricule2 } = logincarteDto;

    const carte1 = await this.userModel.findOne({ matricule1 });
    const carte2 = await this.userModel.findOne({ matricule2 });

    if (carte1 || carte2) {
      if (!carte1) {
        const id = carte2._id;

        const token = this.jwtService.sign({ id: carte2._id });

        return { token, id };
      }
      if (!carte2) {
        const id = carte1._id;

        const token = this.jwtService.sign({ id: carte1._id });

        return { token, id };
      }
    } else {
      throw new UnauthorizedException(  { message: "accès refusé" });
      
    }
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find();
    return users;
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException("Rien a été trouvé");
    }

    return user;
  }

 




  async deleteById(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }
  //modification mot de passe service
  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise <User> {
    const user = await this.findById(id);
    //Verifier si l'utilisateur a entré un mot de passe correct
    const isPasswordCorrect = await bcrypt.compare(
      updateEmployeeDto.password,
      user.password
    );
    if (!isPasswordCorrect) {
       throw new UnauthorizedException({
        message: "Veuillez entrer un bon actuel mot de passe",
      }); 
    }
    if (isPasswordCorrect) {
      //console.log(updateEmployeeDto.newPassword)
      const hashedPassword = await bcrypt.hash(updateEmployeeDto.newPassword, 10);
    return this.userModel.findByIdAndUpdate(id, {password : hashedPassword});
    }
    
  }
  
}
