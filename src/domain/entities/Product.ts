export class Product {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public price: number,
        public readonly description: string,
        public readonly createdAt: Date,
        public updatedAt: Date
    ) {}
}