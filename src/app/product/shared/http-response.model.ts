export interface HttpResponseModel {
    status: number,
    message: string,
    data: object | null
    error: object | null
}