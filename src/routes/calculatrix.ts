import { FastifyInstance } from "fastify";
import {
  CalculModel,
  ResultSchema,
  ResultModel,
  CalculSchema,
} from "../models/calculatrix";

export default async function calculatrixRoute(app: FastifyInstance) {
  const resultsOptions = {
    schema: {
      body: CalculSchema,
      response: {
        200: ResultSchema,
      },
    },
  };
  app.post("/calculatrix", resultsOptions, async (request) => {
    const Calcul = CalculModel.safeParse(request.body);

    if (Calcul.success) {
      const { operation, x, y } = Calcul.data;

      if (operation == "addition") {
        return ResultModel.parse({ resultat: x + y });
      } else if (operation == "soustraction") {
        return ResultModel.parse({ resultat: x - y });
      } else if (operation == "multiplication") {
        return ResultModel.parse({ resultat: x * y });
      } else if (operation == "division") {
        if (y == 0) {
          return "Division par zero impossible";
        } else {
          return ResultModel.parse({ resultat: x / y });
        }
      }
    }
  });
}
