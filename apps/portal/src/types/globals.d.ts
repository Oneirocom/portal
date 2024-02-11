export { };
 

export type Roles = "ADMIN" | "TESTER" | "USER";
declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}