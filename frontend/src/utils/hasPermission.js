export const hasPermission = (user, permissionsNeeded) => {
  if (!user?.permissions) return null

  return user.permissions.some(permission =>
    permissionsNeeded.includes(permission)
  )
}
