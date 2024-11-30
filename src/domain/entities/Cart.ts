export class Cart {
    constructor(
        public readonly id: string,
        public readonly userId: string,
        public readonly products: Array<{
            productId: string,
            price: number,
            quantity: number
        }>,
        public readonly createdAt: Date,
        public updatedAt: Date
    ) {}
}