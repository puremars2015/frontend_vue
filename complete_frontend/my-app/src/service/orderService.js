// orderService.js
export const orderService = {
    saveOrder(order) {

        // 檢查localStorage是否有orders
        let orders = localStorage.getItem('orders');
        if (orders) {
            orders = JSON.parse(orders);
        } else {
            orders = [];
        }

        // 將新的order加入orders
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));


        console.log('Order saved:', order);
    },

    getOrders() {
        let orders = localStorage.getItem('orders');
        if (orders) {
            orders = JSON.parse(orders);
        } else {
            orders = [];
        }

        return orders;
    }
};
