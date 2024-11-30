export interface SaveOrderDTO {
    userId: string;
    products: Array<{
        productId: string;
        quantity: number;
        price: number;
    }>;
}