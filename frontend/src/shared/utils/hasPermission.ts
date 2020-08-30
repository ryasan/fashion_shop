import { UserInterface } from '../typings'

export const hasPermission = (
    user: UserInterface,
    permissionsNeeded: string[]
) => {
    if (!user?.permissions) return null

    return user.permissions.some(permission =>
        permissionsNeeded.includes(permission)
    )
}
