export interface SearchQuery {

    search?: string;

    categoryId?: string;

    minPrice?: number;

    maxPrice?: number;

    isActive?: boolean;

    page: number;

    limit: number;

    sortBy?:
        | 'price'
        | 'createdAt'
        | 'name';

    sortOrder?:
        | 'asc'
        | 'desc';
}