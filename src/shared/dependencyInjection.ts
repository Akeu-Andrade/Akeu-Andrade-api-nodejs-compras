import "reflect-metadata";
import { container } from "tsyringe";
import { CreateProductUseCase } from "../application/use-cases/product/CreateProductUseCase";
import { ProductController } from "../application/controllers/ProductController";
import { ProductRepository } from "../infrastructure/database/repositories/ProductRepository";

container.registerSingleton(
    "IProductRepository",
    ProductRepository
  );
  
  container.registerSingleton(
    "ICreateProductUseCase",
    CreateProductUseCase
  );
  
  container.registerSingleton(
    ProductController
  );