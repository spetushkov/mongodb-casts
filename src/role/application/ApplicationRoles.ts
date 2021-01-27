import { AuthUser, Roles } from '@spetushkou/expressjs';
import { ApiRole } from '../ApiRole';
import { ApplicationRole } from './ApplicationRole';

type RoleId = keyof typeof ApplicationRole;

export class ApplicationRoles implements Roles {
  private readonly apiRoles: Map<RoleId, ApiRole>;

  constructor() {
    this.apiRoles = new Map();
  }

  get(role: RoleId): ApiRole | undefined {
    return this.apiRoles.get(role);
  }

  includes(role: RoleId, user?: AuthUser): boolean {
    return !user || !user.roles ? false : user.roles.includes(role);
  }
}
