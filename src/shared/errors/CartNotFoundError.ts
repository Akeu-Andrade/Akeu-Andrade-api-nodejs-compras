import { HttpError } from "./HttpError";

export class CartNotFoundError extends HttpError {
    constructor() {
        super(404, "Carrinho não encontrado!");
    }
}