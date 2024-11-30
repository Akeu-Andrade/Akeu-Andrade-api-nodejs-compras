import { Router } from 'express';
import "reflect-metadata";
import { container } from 'tsyringe';
import '../../../shared/dependencyInjection';
import { StatisticsController } from '../../../application/controllers/StatisticsController';

const router = Router();
const statisticsController = container.resolve(StatisticsController);

router.get('/statistics', statisticsController.getStatistics);

export { router as StatisticsRoutes };