// @generated
// Automatically generated. Don't change this file manually.

import { usersId } from './users';

export type sessionsId = string & { " __flavor"?: 'sessions' };

export default interface sessions {
  /** Primary key. Index: sessions_pkey */
  token: sessionsId;

  /** Index: sessions_user_id_key */
  user_id: usersId;

  expires_at: Date;

  created_at: Date;

  updated_at: Date;
}

export interface sessionsInitializer {
  /** Primary key. Index: sessions_pkey */
  token: sessionsId;

  /**
   * Default value: nextval('sessions_user_id_seq'::regclass)
   * Index: sessions_user_id_key
   */
  user_id?: usersId;

  expires_at: Date;

  /** Default value: now() */
  created_at?: Date;

  /** Default value: now() */
  updated_at?: Date;
}
