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
import { UpdateDto } from "./dto/update.dto";

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


  async login(loginDto: LoginDto): Promise<{ token: string, id: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException({message:"Cet email n'existe pas"});
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException({message:'Mot de passe invalide'});
    }

    const id = user._id ;
    
    const token = this.jwtService.sign({ id: user._id });

    return { token, id };
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

  async update(id: string, signUpDto : SignUpDto ) {
    
   
        const ancienPassword = await bcrypt.hash(signUpDto.password, 10);  
    
    
    return await this.userModel.findByIdAndUpdate(id, signUpDto , {
  
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }
}
