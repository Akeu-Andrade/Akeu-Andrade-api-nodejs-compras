import { HttpError } from "./HttpError";

export class EmptyCartError extends HttpError {
   
    constructor() {
        super(400, "Carrinho vazio!")
    }
}