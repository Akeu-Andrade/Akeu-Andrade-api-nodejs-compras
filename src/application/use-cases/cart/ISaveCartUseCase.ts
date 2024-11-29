export interface ICreateCartUseCase {
    invoke(userId: string): Promise<void>;
}