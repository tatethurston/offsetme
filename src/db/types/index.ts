// @generated
// Automatically generated. Don't change this file manually.

import login_tokens, { login_tokensInitializer, login_tokensId } from './login_tokens';
import sessions, { sessionsInitializer, sessionsId } from './sessions';
import users, { usersInitializer, usersId } from './users';

type Model =
  | login_tokens
  | sessions
  | users

interface ModelTypeMap {
  'login_tokens': login_tokens;
  'sessions': sessions;
  'users': users;
}

type ModelId =
  | login_tokensId
  | sessionsId
  | usersId

interface ModelIdTypeMap {
  'login_tokens': login_tokensId;
  'sessions': sessionsId;
  'users': usersId;
}

type Initializer =
  | login_tokensInitializer
  | sessionsInitializer
  | usersInitializer

interface InitializerTypeMap {
  'login_tokens': login_tokensInitializer;
  'sessions': sessionsInitializer;
  'users': usersInitializer;
}

export type {
  login_tokens, login_tokensInitializer, login_tokensId,
  sessions, sessionsInitializer, sessionsId,
  users, usersInitializer, usersId,

  Model,
  ModelTypeMap,
  ModelId,
  ModelIdTypeMap,
  Initializer,
  InitializerTypeMap
};
