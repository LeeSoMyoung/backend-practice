import {prisma} from "../../../../generated/prisma-client";
import * as bcrypt from "bcryptjs";

export default{
    Mutation:{
        create: async(_,args)=>{
            const {name, gender, email, password,phoneNumber,school,bank,owner,accountNum,userID}=args;
            const accountInfo=await prisma.createAccount({bank, accountNum, owner});
            await prisma.createUser({phoneNumber, userID, email, password, name, gender, school, accountInfo});
            const exists=await prisma.$exists.user({OR:[{userID},{email},{phoneNumber}]});

            if(exists){
                throw Error("이미 가입되어 있는 유저입니다.");
            }

            const hashedPassword=await bcrypt.hash(password,5);
            await prisma.createUser({phoneNumber, userID, email, password:hashedPassword, name, gender, school, accountInfo});
            return true;
        }
    }
}