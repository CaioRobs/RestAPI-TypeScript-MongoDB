import { object, string, TypeOf } from "zod";

export const createSessionSchema = object({
  email: string({
    required_error: "Email is required",
  }).email("email is no valid"),
  password: string({
    required_error: "Password is required",
  }),
});

export type CreateSessionInput = TypeOf<typeof createSessionSchema>;
