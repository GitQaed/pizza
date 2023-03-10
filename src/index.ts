import fastify from "fastify";
import fp from "fastify-plugin";
// import calculatrixRoute from "./routes/calculatrix";
import pizzas from "./routes/pizzas";
import fastifyMongodb from "@fastify/mongodb";

/**
 * @module calculatrice
 *
 * @description
 *  Contient la correction de l'exercice de calculatrice.
 */

// Nous allons tout d'abord créer une application fastify
const app = fastify();

// Route calculatrix-------------------
// app.register(fp(calculatrixRoute));
//----------------------------------

// Connexion DB---------------------
app.register(fastifyMongodb, {
  url: process.env.URL_DB,
  database: "test_a",
});

//----------------------------------

// Route Pizza------------------
app.register(fp(pizzas));
//----------------------------------

// Type définissant les paramètre à envoyer
// à notre route d'addition
// type AddRoute = {
//   Params: {
//     x: string;
//     y: string;
//   };
// };

// // Route permettant de calculer 2 entiers
// app.get<AddRoute>("/add/:x/:y", (request) => {
//   const x = parseInt(request.params.x);
//   const y = parseInt(request.params.y);

//   return x + y;
// });

// // Route permettant de soustraire 2 entier
// app.get<AddRoute>("/sub/:x/:y", (request) => {
//   const x = parseInt(request.params.x);
//   const y = parseInt(request.params.y);

//   return x - y;
// });

// // Route permettant de multiplier 2 entier
// app.get<AddRoute>("/mul/:x/:y", (request) => {
//   const x = parseInt(request.params.x);
//   const y = parseInt(request.params.y);

//   return x * y;
// });

// // Route permettant de diviser 2 entier
// app.get<AddRoute>("/div/:x/:y", (request, reply) => {
//   const x = parseInt(request.params.x);
//   const y = parseInt(request.params.y);

//   // Je m'assure que nous ne réalisons pas de division par 0
//   if (y === 0) {
//     reply.code(400);

//     return "Division par 0 impossible !";
//   }

//   return x / y;
// });

// type OperationOwner = {
//   Querystring: {
//     operation?: "add" | "sub" | "div" | "mul";
//   };
// };

// app.get<AddRoute & OperationOwner>("/calc/:x/:y", (request, reply) => {
//   const operation = request.query.operation || "add";
//   const x = parseInt(request.params.x);
//   const y = parseInt(request.params.y);

//   if (operation === "add") {
//     return x + y;
//   }

//   if (operation === "sub") {
//     return x - y;
//   }

//   if (operation === "mul") {
//     return x * y;
//   }

//   if (y === 0) {
//     reply.code(400);

//     return "Division par 0 impossible !";
//   }

//   return x / y;
// });

const port = parseInt(process.env.PORT || "5353");
const host = process.env.HOST;

// Nous devons lancer (listen) notre serveur :
app.listen({ port: port, host: host }, () => {
  console.log(`Le serveur prêt sur l'adresse http://${host}:${port}`);
});
