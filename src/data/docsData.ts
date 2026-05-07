export type DocProperty = {
  name: string;
  desc: string;
};

export type DocItem = {
  slug: string;
  title: string;
  module: string;
  type: "Interface" | "Class" | "Function";
  updatedAt: string;
  description: string;
  properties: DocProperty[];
  codeSnippet: string;
  exportPath: string;
  usageContext: string[];
};

export const docsData: DocItem[] = [
  {
    slug: "session-schema",
    title: "SessionSchema",
    module: "authentication_core",
    type: "Interface",
    updatedAt: "Updated 2 hours ago",
    description:
      "Defines the structural blueprint for session state management. This schema is utilized by the AuthStore and persistent cache layers to maintain deterministic session data across clusters.",
    properties: [
      {
        name: "sessionId",
        desc: "Unique identifier generated via UUID v4. Required for all state lookups.",
      },
      {
        name: "ttl",
        desc: "Time-to-live in milliseconds. Default is 3600000 (1 hour).",
      },
      {
        name: "strictMode",
        desc: "Boolean flag to enforce cryptographic validation on every request.",
      },
    ],
    codeSnippet: `export interface SessionSchema {
  /** Unique cryptographic token */
  id: string;
  
  meta: {
    createdAt: Date;
    origin: string;
    deviceFingerprint: string;
  };

  /** Validation method */
  validate(): Promise<boolean>;
}`,
    exportPath: "@engine/core/auth",
    usageContext: ["Production", "Edge Runtime", "Stateless"],
  },
  {
    slug: "jwt-provider",
    title: "JWTProvider",
    module: "authentication_core",
    type: "Class",
    updatedAt: "Updated 5 hours ago",
    description:
      "A utility class responsible for generating, signing, and verifying JSON Web Tokens (JWTs) using an asymmetric key pair. Automatically handles token rotation and revocation list checking.",
    properties: [
      {
        name: "signToken(payload)",
        desc: "Generates a signed JWT with the provided payload data. Uses ES256 algorithm by default.",
      },
      {
        name: "verifyToken(token)",
        desc: "Decodes and verifies the signature of a token against the public key store.",
      },
      {
        name: "isRevoked(tokenId)",
        desc: "Checks the Redis cache to ensure the token has not been explicitly revoked before expiration.",
      },
    ],
    codeSnippet: `export class JWTProvider {
  private privateKey: CryptoKey;
  
  constructor(keyId: string) {
    this.privateKey = KeyStore.get(keyId);
  }

  async signToken(payload: Record<string, any>): Promise<string> {
    const header = { alg: 'ES256', typ: 'JWT' };
    return crypto.subtle.sign(
      { name: 'ECDSA', hash: 'SHA-256' },
      this.privateKey,
      Buffer.from(JSON.stringify(payload))
    );
  }
}`,
    exportPath: "@engine/core/auth/jwt",
    usageContext: ["Authentication", "Node.js", "Stateful"],
  },
  {
    slug: "auth-guard",
    title: "AuthGuard",
    module: "authentication_core",
    type: "Function",
    updatedAt: "Updated 1 day ago",
    description:
      "A middleware function that intercepts incoming requests to validate authentication state. It checks for valid bearer tokens and active session schemas before allowing execution to proceed to the route handler.",
    properties: [
      {
        name: "req",
        desc: "The incoming HTTP request object containing headers and cookies.",
      },
      {
        name: "options",
        desc: "Optional configuration object to specify required roles or bypass paths.",
      },
    ],
    codeSnippet: `export async function AuthGuard(req: Request, options?: GuardOptions) {
  const authHeader = req.headers.get('Authorization');
  
  if (!authHeader?.startsWith('Bearer ')) {
    throw new UnauthorizedError('Missing or malformed token');
  }

  const token = authHeader.split(' ')[1];
  const isValid = await JWTProvider.verifyToken(token);
  
  if (!isValid) {
    throw new ForbiddenError('Token signature invalid or expired');
  }
  
  return true;
}`,
    exportPath: "@engine/core/middleware",
    usageContext: ["Middleware", "Edge/Node", "Routing"],
  },
];
