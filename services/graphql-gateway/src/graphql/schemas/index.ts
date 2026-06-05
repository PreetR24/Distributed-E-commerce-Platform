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

    type Dashboard {

        products: ProductSearchResult!

        searchResults: ProductSearchResult!
    }

    type Query {

        products(
            page: Int
            limit: Int
        ): ProductSearchResult!

        searchProducts(
            search: String!
            page: Int
            limit: Int
        ): ProductSearchResult!

        myOrders: [Order!]!

        dashboard(
            search: String!
        ): Dashboard!
    }
`;