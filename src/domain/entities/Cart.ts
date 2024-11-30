export class Cart {
    constructor(
        public readonly id: string,
        public readonly userId: string,
        public readonly products: Array<{
            productId: string,
            quantity: number
        }>,
        public readonly createdAt: Date,
        public readonly updatedAt: Date
    ) {}
}