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
        order.id = orders.length;
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));


        console.log('Order saved:', order);
    },

    updateOrder(order) {
        let orders = localStorage.getItem('orders');
        if (orders) {
            orders = JSON.parse(orders);
        } else {
            orders = [];
        }

        let index = orders.findIndex(o => o.id === order.id);
        if (index !== -1) {
            orders[index] = order;
            localStorage.setItem('orders', JSON.stringify(orders));
        }
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
