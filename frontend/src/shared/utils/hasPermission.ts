import { UserInterface } from "../interfaces"
import { PermissionEnum } from "../interfaces/enums"

export const hasPermission = (user: UserInterface, permissionsNeeded: PermissionEnum[]) => {
  if (!user?.permissions) return null

  return user.permissions.some((permission) =>
    permissionsNeeded.includes(permission)
  )
}
