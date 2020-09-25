import {prisma} from "../../../../generated/prisma-client";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export default{
    Mutation:{
        login: async(_,args)=>{
            const {userID,password}=args;
            const user=await prisma.user({userID});
            if(!user){
                throw Error("존재하지 않는 유저입니다.");
            }
            const passwordMatch=await bcrypt.compare(password,user.password);
            if(!passwordMatch){
                throw new Error("비밀번호가 틀렸습니다.");
            }
            const token=jwt.sign({id: user.id}, process.env.SECRET);
            return token;
        }
    }
};