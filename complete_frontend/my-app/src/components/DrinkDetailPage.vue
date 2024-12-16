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
  
            <button type="submit" class="submit-button">加入訂單</button>
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
 .body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #1e1e2f, #2d2d4a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.details-container {
  display: flex;
  background: #1a1a2e;
  border: 2px solid #4db6e5;
  border-radius: 10px;
  padding: 20px;
  width: 800px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.drink-image-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
}

.drink-image {
  width: 100%;
  max-width: 150px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.order-section {
  flex: 2;
  display: flex;
  flex-direction: column;
}

.details-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #4db6e5;
  border-bottom: 2px solid #4db6e5;
  padding-bottom: 10px;
}

.drink-name {
  text-align: center;
  margin-bottom: 20px;
  font-size: 18px;
}

.order-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
}

select,
input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #4db6e5;
  border-radius: 5px;
  background: #2a2a45;
  color: #fff;
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.submit-button {
  background: #4db6e5;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-button:hover {
  background: #62c9f9;
  color: #1a1a2e;
}
  </style>
  