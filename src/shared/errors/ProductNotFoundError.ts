import { HttpError } from "./HttpError";

export class ProductNotFoundError extends HttpError {
    constructor() {
        super(404, "Produto não encontrado!");
    }
}