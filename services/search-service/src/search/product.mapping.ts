export const productIndexMapping = {
    settings: {
        analysis: {
            filter: {
                ecommerce_synonyms: {
                    type: 'synonym',
                    synonyms: [
                        'mobile, phone, smartphone',
                        'tv, television',
                        'laptop, notebook',
                        'earbuds, earphones'
                    ]
                }
            },

            analyzer: {
                ecommerce_analyzer: {
                    tokenizer: 'standard',
                    filter: [
                        'lowercase',
                        'ecommerce_synonyms'
                    ]
                }
            }
        }
    },

    mappings: {
        properties: {

            id: {
                type: 'keyword'
            },

            name: {
                type: 'text',
                analyzer:
                    'ecommerce_analyzer'
            },

            description: {
                type: 'text',
                analyzer:
                    'ecommerce_analyzer'
            },

            categoryId: {
                type: 'keyword'
            },

            categoryName: {
                type: 'keyword'
            },

            price: {
                type: 'float'
            },

            isActive: {
                type: 'boolean'
            },

            createdAt: {
                type: 'date'
            },

            updatedAt: {
                type: 'date'
            },

            suggest: {
                type:
                    'completion'
            }
        }
    }
};