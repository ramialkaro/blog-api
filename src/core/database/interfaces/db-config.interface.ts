export interface IDatabaseConfigAtttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAtttributes;
  test: IDatabaseConfigAtttributes;
  production: IDatabaseConfigAtttributes;
}
