import {GraphQLServer} from "graphql-yoga";
import "./env";
import schema from "./schema";

require("dotenv").config();


const server=new GraphQLServer({schema});
const PORT = process.env.PORT||4000;

server.start({port:PORT},()=>console.log(`Server running on http://localhost:${PORT}`));