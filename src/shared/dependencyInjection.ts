import "reflect-metadata";
import { container } from "tsyringe";
import { SaveProductUseCase } from "../application/use-cases/product/SaveProductUseCase";
import { ProductController } from "../application/controllers/ProductController";
import { ProductRepository } from "../infrastructure/database/repositories/ProductRepository";
import { GetProductUseCase } from "../application/use-cases/product/GetProductUseCase";
import { UserController } from "../application/controllers/UserController";

// Product

container.registerSingleton("IProductRepository", ProductRepository)

container.registerSingleton("ISaveProductUseCase", SaveProductUseCase)
  .registerSingleton("IGetProductUseCase", GetProductUseCase);

container.registerSingleton(ProductController);

// User

container.registerSingleton(UserController);