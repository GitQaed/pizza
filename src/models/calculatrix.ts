import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

/*Models*/
export const CalculModel = z.object({
  operation: z.enum(["addition", "multiplication", "division", "soustraction"]),
  x: z.number(),
  y: z.number(),
});
export const ResultModel = z.object({
  resultat: z.number(),
});

/*Types*/
export type CalculType = z.infer<typeof CalculModel>;
export type ResultType = z.infer<typeof ResultModel>;

/*Schemas*/
export const CalculSchema = zodToJsonSchema(CalculModel);
export const ResultSchema = zodToJsonSchema(ResultModel);
