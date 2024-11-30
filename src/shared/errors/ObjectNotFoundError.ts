import { HttpError } from "./HttpError";

export class ObjectNotFoundError extends HttpError {
   
    constructor(message: string) {
        super(404, message)
    }
}