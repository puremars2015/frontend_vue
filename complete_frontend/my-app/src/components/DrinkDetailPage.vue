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
import { orderService } from '@/service/orderService';

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
        this.saveOrder();

        // 回到DrinksPage
        this.$router.push('/drinks-page');
      },
      saveOrder() {
        orderService.saveOrder(
            { 
                name: this.drinkName, 
                sugar: this.orderDetails.sugar, 
                ice: this.orderDetails.ice, 
                quantity: this.orderDetails.quantity 
            }
        );
      }
    },
  };
  </script>
  <style scoped>
  .body {
    margin: 0;
    font-family: 'Comic Sans MS', cursive, sans-serif; /* 手寫風格字體 */
    background: linear-gradient(135deg, #fff7da, #ffe8e8); /* 柔和漸層背景 */
    color: #4a4a4a; /* 溫暖的文字顏色 */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .details-container {
    display: flex;
    background: #ffffff; /* 卡片背景 */
    border: 2px solid #fab1a0; /* 粉色邊框 */
    border-radius: 15px;
    padding: 25px;
    width: 800px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* 輕微陰影 */
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
    max-width: 200px; /* 增加圖片大小 */
    border-radius: 15px; /* 圓潤圖片 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* 柔和陰影 */
  }
  
  .order-section {
    flex: 2;
    display: flex;
    flex-direction: column;
  }
  
  .details-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 26px;
    color: #ff7675; /* 粉色標題文字 */
    border-bottom: 2px dashed #fab1a0; /* 虛線分隔符 */
    padding-bottom: 10px;
  }
  
  .drink-name {
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
    color: #4a4a4a; /* 默認文字顏色 */
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
    color: #4a4a4a; /* 字體顏色 */
  }
  
  select,
  input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 2px solid #fab1a0; /* 粉色邊框 */
    border-radius: 10px; /* 圓角設計 */
    background: #fffaec; /* 柔和奶油背景 */
    color: #4a4a4a; /* 文字顏色 */
    transition: border-color 0.3s ease, transform 0.2s ease;
  }
  
  select:focus,
  input:focus {
    border-color: #ff7675; /* 焦點變為粉紅 */
    transform: scale(1.02); /* 輕微放大 */
  }
  
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  
  .submit-button {
    background: linear-gradient(to right, #81ecec, #74b9ff); /* 飲料店風漸層按鈕 */
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
  }
  
  .submit-button:hover {
    background: linear-gradient(to right, #74b9ff, #81ecec); /* 懸停漸層方向改變 */
    transform: translateY(-2px); /* 懸停時輕微上移 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); /* 提升按鈕層次 */
  }

  select,
  input {
    width: 100%; /* 設置寬度一致 */
    padding: 10px; /* 統一內邊距 */
    font-size: 14px; /* 統一字體大小 */
    border: 2px solid #fab1a0; /* 粉色邊框 */
    border-radius: 10px; /* 圓角設計 */
    background: #fffaec; /* 柔和奶油背景 */
    color: #4a4a4a; /* 文字顏色 */
    transition: border-color 0.3s ease, transform 0.2s ease;
    box-sizing: border-box; /* 確保內邊距不影響寬度 */
  }

  select:focus,
  input:focus {
    border-color: #ff7675; /* 焦點變為粉紅 */
    transform: scale(1.02); /* 輕微放大 */
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none; /* 隱藏數字輸入的微調按鈕 */
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
    color: #4a4a4a; /* 字體顏色 */
  }
  </style>
  