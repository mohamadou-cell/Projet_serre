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
      throw new UnauthorizedException({ message: "accès refusé" })
    }

    /*   const id = user._id ;

  const token = this.jwtService.sign({ id: user._id });

  return { token, id }; */
  }

  async findAll(): Promise<User[]> {
    const books = await this.userModel.find();
    return books;
  }

  async findById(id: string): Promise<User> {
    const book = await this.userModel.findById(id);

    if (!book) {
      throw new NotFoundException("Book not found.");
    }

    return book;
  }

  async updateById(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
