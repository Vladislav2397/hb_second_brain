import { Injectable } from '@nestjs/common'

// This should be a real class/interface representing a user entity
export type User = any

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            username: 'admin',
            password: 'password',
        },
        {
            id: 2,
            username: 'maria',
            password: 'guess',
        },
    ] satisfies User[]

    findOne(username: string) {
        return Promise.resolve(
            this.users.find((user) => user.username === username),
        )
    }
}
