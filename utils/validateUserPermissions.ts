type User = {
  permissions: string[];
  roles: string[];
}

type ValidateuserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
}

export function validateUserPermissions({ 
  user,
  permissions,
  roles,
 }: ValidateuserPermissionsParams) {
  if (permissions?.length > 0) {
    const hasAllPermisssions = permissions.every(permission => {
      return user.permissions.includes(permission)
    })

    if (!hasAllPermisssions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasAllRoles = roles.some(role => {
      return user.roles.includes(role)
    })

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}