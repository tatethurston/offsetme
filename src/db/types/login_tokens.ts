// @generated
// Automatically generated. Don't change this file manually.

export type login_tokensId = string & { " __flavor"?: 'login_tokens' };

export default interface login_tokens {
  /** Primary key. Index: login_tokens_pkey */
  token: login_tokensId;

  /** Index: login_tokens_email_key */
  email: string;

  expires_at: Date;

  created_at: Date;

  updated_at: Date;
}

export interface login_tokensInitializer {
  /** Primary key. Index: login_tokens_pkey */
  token: login_tokensId;

  /** Index: login_tokens_email_key */
  email: string;

  expires_at: Date;

  /** Default value: now() */
  created_at?: Date;

  /** Default value: now() */
  updated_at?: Date;
}
