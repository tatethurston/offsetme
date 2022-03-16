// @generated
// Automatically generated. Don't change this file manually.

export type usersId = string & { " __flavor"?: 'users' };

export default interface users {
  /** Primary key. Index: users_pkey */
  id: usersId;

  /** Index: users_email_key */
  email: string;

  name: string | null;

  image_url: string | null;

  created_at: Date;

  updated_at: Date;
}

export interface usersInitializer {
  /**
   * Default value: nextval('users_id_seq'::regclass)
   * Primary key. Index: users_pkey
   */
  id?: usersId;

  /** Index: users_email_key */
  email: string;

  name?: string | null;

  image_url?: string | null;

  /** Default value: now() */
  created_at?: Date;

  /** Default value: now() */
  updated_at?: Date;
}
