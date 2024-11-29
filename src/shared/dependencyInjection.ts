import "reflect-metadata";
import { container } from "tsyringe";
import { CreateProductUseCase } from "../application/use-cases/product/CreateProductUseCase";
import { ProductController } from "../application/controllers/ProductController";
import { ProductRepository } from "../infrastructure/database/repositories/ProductRepository";
import { GetProductUseCase } from "../application/use-cases/product/GetProductUseCase";

// Product

container.registerSingleton("IProductRepository", ProductRepository)

container.registerSingleton("ICreateProductUseCase", CreateProductUseCase)
  .registerSingleton("IGetProductUseCase", GetProductUseCase);

container.registerSingleton(ProductController);