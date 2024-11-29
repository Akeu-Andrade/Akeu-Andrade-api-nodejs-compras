import "reflect-metadata";
import { container } from "tsyringe";
import { SaveProductUseCase } from "../application/use-cases/product/SaveProductUseCase";
import { ProductController } from "../application/controllers/ProductController";
import { ProductRepository } from "../infrastructure/database/repositories/ProductRepository";
import { GetProductUseCase } from "../application/use-cases/product/GetProductUseCase";
import { UserController } from "../application/controllers/UserController";
import { UserRepository } from "../infrastructure/database/repositories/UserRepository";
import { SaveUserUseCase } from "../application/use-cases/user/SaveUserUseCase";
import { GetUsersUseCase } from "../application/use-cases/user/GetUsersUseCase";

// Product

container.registerSingleton("IProductRepository", ProductRepository)

container.registerSingleton("ISaveProductUseCase", SaveProductUseCase)
  .registerSingleton("IGetProductUseCase", GetProductUseCase);

container.registerSingleton(ProductController);

// User

container.registerSingleton("IUserRepository", UserRepository);

container.registerSingleton("ISaveUserUseCase", SaveUserUseCase)
  .registerSingleton("IGetUsersUseCase", GetUsersUseCase);

container.registerSingleton(UserController);