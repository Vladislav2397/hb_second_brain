import * as C from '@withease/contracts'

export const loginResponseContract = C.obj({
    access_token: C.str,
})

export const registrationResponseContract = C.obj({
    access_token: C.str,
})
