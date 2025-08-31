/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Note {
    /**
     * Уникальный идентификатор заметки
     * @format uuid
     */
    id: string
    /** Название заметки */
    name: string
    /** Содержимое заметки */
    content: string
    /**
     * Дата создания
     * @format date-time
     */
    createdAt?: string
    /**
     * Дата последнего обновления
     * @format date-time
     */
    updatedAt?: string
    /**
     * ID автора заметки
     * @format uuid
     */
    authorId: string
}

export interface CreateNoteDto {
    /** Название заметки */
    name: string
    /** Содержимое заметки */
    content: string
}

export interface UpdateNoteDto {
    /** Название заметки */
    name?: string
    /** Содержимое заметки */
    content?: string
}

export interface UserResponse {
    /**
     * Уникальный идентификатор пользователя
     * @format uuid
     */
    id: string
    /** Имя пользователя */
    name: string
    /**
     * Email пользователя
     * @format email
     */
    email: string
}

export interface LoginDto {
    /**
     * Email пользователя
     * @format email
     */
    email: string
    /** Пароль пользователя */
    password: string
}

export interface RegisterDto {
    /** Имя пользователя */
    name: string
    /**
     * Email пользователя
     * @format email
     */
    email: string
    /** Пароль пользователя */
    password: string
}

export interface UpdateUserDto {
    /** Имя пользователя */
    name: string
}

export interface LoginResponse {
    /** JWT токен для авторизации */
    access_token: string
}

import type {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    HeadersDefaults,
    ResponseType,
} from 'axios'
import axios from 'axios'

export type QueryParamsType = Record<string | number, any>

export interface FullRequestParams
    extends Omit<
        AxiosRequestConfig,
        'data' | 'params' | 'url' | 'responseType'
    > {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean
    /** request path */
    path: string
    /** content type of request body */
    type?: ContentType
    /** query params */
    query?: QueryParamsType
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType
    /** request body */
    body?: unknown
}

export type RequestParams = Omit<
    FullRequestParams,
    'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown>
    extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
    securityWorker?: (
        securityData: SecurityDataType | null,
    ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void
    secure?: boolean
    format?: ResponseType
}

export enum ContentType {
    Json = 'application/json',
    JsonApi = 'application/vnd.api+json',
    FormData = 'multipart/form-data',
    UrlEncoded = 'application/x-www-form-urlencoded',
    Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
    public instance: AxiosInstance
    private securityData: SecurityDataType | null = null
    private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
    private secure?: boolean
    private format?: ResponseType

    constructor({
        securityWorker,
        secure,
        format,
        ...axiosConfig
    }: ApiConfig<SecurityDataType> = {}) {
        this.instance = axios.create({
            ...axiosConfig,
            baseURL: axiosConfig.baseURL || 'http://localhost:5210',
        })
        this.secure = secure
        this.format = format
        this.securityWorker = securityWorker
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data
    }

    protected mergeRequestParams(
        params1: AxiosRequestConfig,
        params2?: AxiosRequestConfig,
    ): AxiosRequestConfig {
        const method = params1.method || (params2 && params2.method)

        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method &&
                    this.instance.defaults.headers[
                        method.toLowerCase() as keyof HeadersDefaults
                    ]) ||
                    {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        }
    }

    protected stringifyFormItem(formItem: unknown) {
        if (typeof formItem === 'object' && formItem !== null) {
            return JSON.stringify(formItem)
        } else {
            return `${formItem}`
        }
    }

    protected createFormData(input: Record<string, unknown>): FormData {
        if (input instanceof FormData) {
            return input
        }

        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key]
            const propertyContent: any[] =
                property instanceof Array ? property : [property]

            for (const formItem of propertyContent) {
                const isFileType =
                    formItem instanceof Blob || formItem instanceof File
                formData.append(
                    key,
                    isFileType ? formItem : this.stringifyFormItem(formItem),
                )
            }

            return formData
        }, new FormData())
    }

    public request = async <T = any, _E = any>({
        secure,
        path,
        type,
        query,
        format,
        body,
        ...params
    }: FullRequestParams): Promise<AxiosResponse<T>> => {
        const secureParams =
            ((typeof secure === 'boolean' ? secure : this.secure) &&
                this.securityWorker &&
                (await this.securityWorker(this.securityData))) ||
            {}
        const requestParams = this.mergeRequestParams(params, secureParams)
        const responseFormat = format || this.format || undefined

        if (
            type === ContentType.FormData &&
            body &&
            body !== null &&
            typeof body === 'object'
        ) {
            body = this.createFormData(body as Record<string, unknown>)
        }

        if (
            type === ContentType.Text &&
            body &&
            body !== null &&
            typeof body !== 'string'
        ) {
            body = JSON.stringify(body)
        }

        return this.instance.request({
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type ? { 'Content-Type': type } : {}),
            },
            params: query,
            responseType: responseFormat,
            data: body,
            url: path,
        })
    }
}

/**
 * @title HB Second Brain API
 * @version 1.0.0
 * @license Apache 2.0 (http://www.apache.org/licenses/LICENSE-2.0.html)
 * @termsOfService http://swagger.io/terms/
 * @baseUrl http://localhost:5210
 * @externalDocs https://github.com/your-repo/hb-second-brain
 *
 * API для системы управления заметками HB Second Brain
 */
export class Api<
    SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
    api = {
        /**
         * @description Возвращает приветственное сообщение
         *
         * @tags default
         * @name GetHello
         * @summary Проверка работоспособности API
         * @request GET:/api/v1
         * @response `200` `string` Успешная операция
         */
        getHello: (params: RequestParams = {}) =>
            this.request<string, any>({
                path: `/api/v1`,
                method: 'GET',
                ...params,
            }),

        /**
         * @description Создание нового пользователя в системе
         *
         * @tags auth
         * @name SignUp
         * @summary Регистрация пользователя
         * @request POST:/api/v1/auth/register
         * @response `201` `LoginResponse` Пользователь успешно зарегистрирован
         * @response `400` `void` Неверные данные
         */
        signUp: (body: RegisterDto, params: RequestParams = {}) =>
            this.request<LoginResponse, void>({
                path: `/api/v1/auth/register`,
                method: 'POST',
                body: body,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * @description Аутентификация пользователя по email и паролю
         *
         * @tags auth
         * @name SignIn
         * @summary Вход в систему
         * @request POST:/api/v1/auth/login
         * @response `200` `LoginResponse` Успешная аутентификация
         * @response `401` `void` Неверные учетные данные
         */
        signIn: (body: LoginDto, params: RequestParams = {}) =>
            this.request<LoginResponse, void>({
                path: `/api/v1/auth/login`,
                method: 'POST',
                body: body,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * @description Возвращает данные текущего авторизованного пользователя
         *
         * @tags auth
         * @name GetMe
         * @summary Получить информацию о текущем пользователе
         * @request GET:/api/v1/auth/me
         * @secure
         * @response `200` `UserResponse` Успешная операция
         * @response `401` `void` Не авторизован
         * @response `404` `void` Пользователь не найден
         */
        getMe: (params: RequestParams = {}) =>
            this.request<UserResponse, void>({
                path: `/api/v1/auth/me`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
         * @description Обновляет информацию о текущем пользователе
         *
         * @tags auth
         * @name UpdateMe
         * @summary Обновить данные пользователя
         * @request PATCH:/api/v1/auth/me
         * @secure
         * @response `200` `UserResponse` Данные успешно обновлены
         * @response `400` `void` Неверные данные
         * @response `401` `void` Не авторизован
         */
        updateMe: (body: UpdateUserDto, params: RequestParams = {}) =>
            this.request<UserResponse, void>({
                path: `/api/v1/auth/me`,
                method: 'PATCH',
                body: body,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
         * @description Возвращает список всех заметок текущего пользователя
         *
         * @tags notes
         * @name FindAllNotes
         * @summary Получить все заметки пользователя
         * @request GET:/api/v1/notes
         * @secure
         * @response `200` `{ notes?: (Note)[] }` Успешная операция
         * @response `401` `void` Не авторизован
         */
        findAllNotes: (params: RequestParams = {}) =>
            this.request<
                {
                    notes?: Note[]
                },
                void
            >({
                path: `/api/v1/notes`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
 * @description Создает новую заметку для текущего пользователя
 *
 * @tags notes
 * @name CreateNote
 * @summary Создать новую заметку
 * @request POST:/api/v1/notes
 * @secure
 * @response `201` `{
    note?: Note,

}` Заметка успешно создана
 * @response `400` `void` Неверные данные
 * @response `401` `void` Не авторизован
 */
        createNote: (body: CreateNoteDto, params: RequestParams = {}) =>
            this.request<
                {
                    note?: Note
                },
                void
            >({
                path: `/api/v1/notes`,
                method: 'POST',
                body: body,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
 * @description Возвращает конкретную заметку пользователя по ID
 *
 * @tags notes
 * @name FindOneNote
 * @summary Получить заметку по ID
 * @request GET:/api/v1/notes/{noteId}
 * @secure
 * @response `200` `{
    note?: Note,

}` Успешная операция
 * @response `401` `void` Не авторизован
 * @response `404` `void` Заметка не найдена
 */
        findOneNote: (noteId: string, params: RequestParams = {}) =>
            this.request<
                {
                    note?: Note
                },
                void
            >({
                path: `/api/v1/notes/${noteId}`,
                method: 'GET',
                secure: true,
                format: 'json',
                ...params,
            }),

        /**
 * @description Обновляет существующую заметку пользователя
 *
 * @tags notes
 * @name UpdateNote
 * @summary Обновить заметку
 * @request PATCH:/api/v1/notes/{noteId}
 * @secure
 * @response `200` `{
    note?: Note,

}` Заметка успешно обновлена
 * @response `400` `void` Неверные данные
 * @response `401` `void` Не авторизован
 * @response `404` `void` Заметка не найдена
 */
        updateNote: (
            noteId: string,
            body: UpdateNoteDto,
            params: RequestParams = {},
        ) =>
            this.request<
                {
                    note?: Note
                },
                void
            >({
                path: `/api/v1/notes/${noteId}`,
                method: 'PATCH',
                body: body,
                secure: true,
                type: ContentType.Json,
                format: 'json',
                ...params,
            }),

        /**
 * @description Удаляет заметку пользователя
 *
 * @tags notes
 * @name RemoveNote
 * @summary Удалить заметку
 * @request DELETE:/api/v1/notes/{noteId}
 * @secure
 * @response `200` `{
    note?: Note,

}` Заметка успешно удалена
 * @response `401` `void` Не авторизован
 * @response `404` `void` Заметка не найдена
 */
        removeNote: (noteId: string, params: RequestParams = {}) =>
            this.request<
                {
                    note?: Note
                },
                void
            >({
                path: `/api/v1/notes/${noteId}`,
                method: 'DELETE',
                secure: true,
                format: 'json',
                ...params,
            }),
    }
}
