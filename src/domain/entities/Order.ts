export class Order {
    constructor(
        public readonly id: string,
        public readonly userId: string,
        public readonly products: Array<{
            productId: string,
            price: number,
            quantity: number
        }>,
        public totalPrice: number,
        public date: Date
    ) {}
}