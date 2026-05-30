import { prisma }
from '@config/prisma';

export const incrementSearchTerm =
async (
    searchTerm: string
) => {

    return prisma.searchAnalytics.upsert({

        where: {
            searchTerm
        },

        create: {
            searchTerm
        },

        update: {
            totalSearches: {
                increment: 1
            }
        }
    });
};

export const getTrendingSearches =
async () => {

    return prisma.searchAnalytics.findMany({

        orderBy: {
            totalSearches: 'desc'
        },

        take: 10
    });
};