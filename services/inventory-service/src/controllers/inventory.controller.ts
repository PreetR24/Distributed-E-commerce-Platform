import { Request, Response }
from 'express';

import { prisma }
from '@config/prisma';

export const createInventoryController =
async (
    req: Request,
    res: Response
) => {

    const inventory =
        await prisma.inventory.create({
            data: req.body
        });

    return res.status(201).json({
        success: true,
        data: inventory
    });
};

export const getInventoryController =
async (
    req: Request,
    res: Response
) => {

    const inventory =
        await prisma.inventory.findMany();

    return res.status(200).json({
        success: true,
        data: inventory
    });
};