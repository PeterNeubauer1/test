export interface UserManagementState {
    userCount: number,
    users: UserData[],
    page: number
}

export interface UserData {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}