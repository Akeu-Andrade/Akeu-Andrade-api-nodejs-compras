export interface SaveCartDTO {
    userId: string;
    products: Array<{
        id: string;
        quantity: number;
    }>;
}
