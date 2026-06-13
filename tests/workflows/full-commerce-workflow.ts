import {
    tokens
}
from '../config/token-store';

import {
    apiClient
}
from '../config/api-client';

import {
    success,
    info
}
from '../config/logger';

const testRunId =
    Date.now();

export const runCommerceWorkflow =
async () => {
    try{

        
        info(
        'Starting Commerce Workflow'
    );

    /*
    ===========================
    CATEGORY
    ===========================
    */

    const categoryResponse =
        await apiClient.post(

            '/categories',
            
            {
                name:
                `Testing-${testRunId}`
            },
            {
                headers: {

                    Authorization:
                        `Bearer ${tokens.admin.accessToken}`
                }
            }
        );

        const categoryId =
        categoryResponse.data.
        data.id;
        
        success(
        'Category Created'
    );

    /*
    ===========================
    PRODUCT
    ===========================
    */

    const productResponse =
    await apiClient.post(

        '/products',
        
        {
            name: `Testing-${testRunId}`,
            
            description:
            'Testing the workflow',
            
            price:
            999,
            
            categoryId
        },
        {
            headers: {

                Authorization:
                    `Bearer ${tokens.admin.accessToken}`
            }
        }
    );
    const productId =
    productResponse.data
    .data.id;
    
    success(
        'Product Created'
    );

    /*
    ===========================
    INVENTORY
    ===========================
    */

   await apiClient.post(

       '/inventory',
       
       {
           productId,
           
           availableStock:
           10
        },
        {
            headers: {

                Authorization:
                    `Bearer ${tokens.admin.accessToken}`
            }
        }
    );
    
    success(
        'Inventory Created'
    );

    /*
    ===========================
    ORDER
    ===========================
    */

   const orderResponse =
   await apiClient.post(
       
       '/orders',
       
        {
           
           items: [
               
               {
                   
                   productId,
                   
                   productName:
                   `Testing-${testRunId}`,
                   
                   productPrice:
                   999,
                   
                        quantity:
                        2
                    }
                ]
            },
        {
                headers: {

                    Authorization:
                        `Bearer ${tokens.customer.accessToken}`
                }
            }
        );
        
    const orderId =
    orderResponse.data
    .data.id;
        
    success(
        'Order Created'
    );
    
    /*
    ===========================
    PAYMENT
    ===========================
    */
   
   const paymentResponse = await apiClient.post(
            '/payments',
            {
                
                orderId,
                
                amount:
                1998,
                
                currency:
                'USD',
                
                paymentProvider:
                'FAKE_STRIPE',
                
                idempotencyKey:
                Date.now()
                .toString()
            },
            {
                headers: {

                    Authorization:
                        `Bearer ${tokens.customer.accessToken}`
                }
            }
        );
        
    success(
        `Payment Status: ${paymentResponse.data.data.status}`
    );

    /*
    ===========================
    WAIT FOR EVENTS
    ===========================
    */

   await new Promise(
       resolve =>
        setTimeout(
                resolve,
                3000
            )
        );
        
        /*
        ===========================
        NOTIFICATIONS
        ===========================
    */
   
   const notifications =
   await apiClient.get(
       '/notifications',
       {
            headers: {

                Authorization:
                    `Bearer ${tokens.customer.accessToken}`
            }
        }
    );

    const notificationExists =
        notifications.data.data.some(
            
            (
                notification: any
            ) =>
                
                notification.message.includes(
                    orderId
                )
            );
            
            if (
                notificationExists
            ) {
                
                success(
                    'Notification Generated'
                );
    }

    /*
    ===========================
    ANALYTICS
    ===========================
    */
   
   const analytics =
   await apiClient.get(
       '/analytics/dashboard',
       {
            headers: {

                Authorization:
                    `Bearer ${tokens.admin.accessToken}`
            }
        }
    );
    
    success(
        `Analytics Revenue: ${analytics.data.data.totalRevenue}`
    );
    
    /*
    ===========================
    SEARCH
    ===========================
    */
   
    const search =
    await apiClient.get(
            '/search?q=Testing',
            {
                headers: {

                    Authorization:
                        `Bearer ${tokens.customer.accessToken}`
                }
            }
        );

        if (
            search.data.data.length
        ) {
            
            success(
                'Search Indexed'
            );
        }
        
        success(
            'SYSTEM WORKFLOW PASSED'
        );
    }
    catch (error: any) {
        console.log(
            'STATUS:',
            error.response?.status
        );

        console.log(
            'DATA:',
            JSON.stringify(
                error.response?.data,
                null,
                2
            )
        );

        console.log(
            'MESSAGE:',
            error.message
        );

        throw error;
    }
};