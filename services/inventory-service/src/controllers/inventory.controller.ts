import { Request, Response } from 'express';

import { createInventoryService, getInventoryService } from '@services/inventory.service';

export const createInventoryController = async (
    req: Request,
    res: Response
) => {
    const inventory = await createInventoryService(req.body);

    return res.status(201).json({
        success: true,
        data: inventory
    });
};

export const getInventoryController = async (
    req: Request,
    res: Response
) => {
    const inventory = await getInventoryService();

    return res.status(200).json({
        success: true,
        data: inventory
    });
};