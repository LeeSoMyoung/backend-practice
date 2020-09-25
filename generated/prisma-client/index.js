"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "Account",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  },
  {
    name: "ChatRoom",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Room",
    embedded: false
  },
  {
    name: "Payment",
    embedded: false
  },
  {
    name: "Report",
    embedded: false
  },
  {
    name: "BlockedUser",
    embedded: false
  },
  {
    name: "Deactivate",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/back-end/back-end/dev`
});
exports.prisma = new exports.Prisma();
