import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { IGetStatisticsUseCase } from '../use-cases/statistics/IGetStatisticsUseCase';

@injectable()
export class StatisticsController {
    constructor(
        @inject("IGetStatisticsUseCase") private getStatisticsUseCase: IGetStatisticsUseCase
    ) {}

    getStatistics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const statistics = await this.getStatisticsUseCase.invoke();
            res.status(200).json(statistics);
        } catch (error) {
            next(error);
        }
    }
}