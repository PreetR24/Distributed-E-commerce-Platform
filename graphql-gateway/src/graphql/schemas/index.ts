export const typeDefs = `

    type Product {
        id: ID!
        name: String!
        description: String!
        price: Float!
        categoryId: String!
        isActive: Boolean!
    }

    type Order {
        id: ID!
        userId: String!
        totalAmount: Float!
        status: String!
        createdAt: String!
    }

    type ProductPagination {
        total: Int!
        page: Int!
        limit: Int!
        totalPages: Int!
    }

    type ProductSearchResult {
        products: [Product!]!
        pagination: ProductPagination!
    }

    type TrendingSearch {
        id: ID!
        searchTerm: String!
        totalSearches: Int!
        createdAt: String!
        updatedAt: String!
    }

    type Analytics {
        totalRevenue: Float!
        totalOrders: Int!
        successfulPayments: Int!
        failedPayments: Int!
        totalProducts: Int!
    }

    type Dashboard {
        analytics: Analytics!
        products: ProductSearchResult!
        searchResults: ProductSearchResult!
        trendingSearches: [TrendingSearch!]!
    }

    type Query {

        products(
            page: Int
            limit: Int
        ): ProductSearchResult!

        product(
            id: ID!
        ): Product

        searchProducts(
            search: String!
            page: Int
            limit: Int
        ): ProductSearchResult!

        autocomplete(
            query: String!
        ): [String!]!

        trendingSearches: [TrendingSearch!]!

        myOrders: [Order!]!

        analytics: Analytics!

        dashboard(
            search: String!
        ): Dashboard!
    }
`;