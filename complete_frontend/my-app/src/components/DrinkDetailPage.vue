<template>
    <div class="body">
      <div class="details-container">
        <div class="drink-image-section">
          <img :src="drinkImage" alt="飲料圖片" class="drink-image" />
        </div>
        <div class="order-section">
          <h1 class="details-title">訂購明細</h1>
          <p class="drink-name">飲料名稱：{{ drinkName }}</p>
  
          <form class="order-form" @submit.prevent="goToConfirmOrder">
            <div class="form-group">
              <label for="sugar">糖度</label>
              <select id="sugar" v-model="orderDetails.sugar">
                <option value="無糖">無糖</option>
                <option value="微糖">微糖</option>
                <option value="半糖">半糖</option>
                <option value="少糖">少糖</option>
                <option value="全糖">全糖</option>
              </select>
            </div>
  
            <div class="form-group">
              <label for="ice">冰量</label>
              <select id="ice" v-model="orderDetails.ice">
                <option value="去冰">去冰</option>
                <option value="微冰">微冰</option>
                <option value="少冰">少冰</option>
                <option value="正常冰">正常冰</option>
              </select>
            </div>
  
            <div class="form-group">
              <label for="quantity">杯數</label>
              <input
                id="quantity"
                type="number"
                min="1"
                v-model.number="orderDetails.quantity"
              />
            </div>
  
            <button type="submit" class="submit-button">下一步</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DrinkDetailPage',
    data() {
      return {
        drinkName: this.$route.query.name || '未知飲料',
        drinkImage: this.getDrinkImage(this.$route.query.name),
        orderDetails: {
          sugar: '全糖',
          ice: '正常冰',
          quantity: 1,
        },
      };
    },
    methods: {
      getDrinkImage(drinkName) {
        const images = {
          '珍珠奶茶': 'https://example.com/pearl_milk_tea.jpg',
          '水果茶': 'https://example.com/fruit_tea.jpg',
          '拿鐵咖啡': 'https://example.com/latte.jpg',
          '氣泡飲': 'https://example.com/soda.jpg',
        };
        return images[drinkName] || 'https://example.com/default_drink.jpg';
      },
      goToConfirmOrder() {
        // 導向確認訂單頁面，傳遞訂單資訊
        this.$router.push({
          name: 'ConfirmOrder',
          query: {
            name: this.drinkName,
            sugar: this.orderDetails.sugar,
            ice: this.orderDetails.ice,
            quantity: this.orderDetails.quantity,
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  /* 保持原有樣式 */
  </style>
  