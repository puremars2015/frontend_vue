<template>
    <div class="body">
      <div class="confirm-container">
        <h1 class="confirm-title">確認訂單</h1>
        <div class="order-summary">
          <div class="order-item" v-for="(drink, index) in drinks" :key="index">
            <h3>飲料 {{ index + 1 }}</h3>
            <ul>
              <li><strong>飲料名稱：</strong>{{ drink.name }}</li>
              <li><strong>糖度：</strong>{{ drink.sugar }}</li>
              <li><strong>冰量：</strong>{{ drink.ice }}</li>
              <li><strong>杯數：</strong>{{ drink.quantity }}</li>
            </ul>
            <button class="edit-button" @click="editDrink(index)">編輯</button>
          </div>
        </div>
        <div class="buttons">
          <button class="confirm-button" @click="submitOrder">確認訂單</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConfirmOrder',
    data() {
      return {
        drinks: [
            { name: '珍珠奶茶', sugar: '全糖', ice: '正常冰', quantity: 1 },
            { name: '水果茶', sugar: '微糖', ice: '少冰', quantity: 2 },
            { name: '拿鐵咖啡', sugar: '半糖', ice: '微冰', quantity: 1 },
        ] || [], // 接收多筆飲料資料
      };
    },
    methods: {
      editDrink(index) {
        // 返回 OrderDetails，傳遞選中的飲料資料
        const drinkToEdit = this.drinks[index];
        this.$router.push({
          name: 'OrderDetails',
          query: {
            name: drinkToEdit.name,
            sugar: drinkToEdit.sugar,
            ice: drinkToEdit.ice,
            quantity: drinkToEdit.quantity,
            index, // 傳遞飲料索引
          },
        });
      },
      submitOrder() {
        // 提交所有訂單
        const orderSummary = this.drinks
          .map(
            (drink, index) =>
              `飲料 ${index + 1}：${drink.name}\n糖度：${drink.sugar}\n冰量：${drink.ice}\n杯數：${drink.quantity}`
          )
          .join('\n\n');
        alert(`訂單確認：\n\n${orderSummary}`);
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
  
  .confirm-container {
    background: #1a1a2e;
    border: 2px solid #4db6e5;
    border-radius: 10px;
    padding: 20px;
    width: 500px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .confirm-title {
    font-size: 24px;
    color: #4db6e5;
    margin-bottom: 20px;
  }
  
  .order-summary {
    margin-bottom: 20px;
  }
  
  .order-item {
    background: #2a2a45;
    border: 1px solid #4db6e5;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
  }
  
  .order-item h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #4db6e5;
  }
  
  .order-item ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .order-item li {
    margin-bottom: 5px;
    font-size: 16px;
  }
  
  .edit-button {
    background: #4db6e5;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .edit-button:hover {
    background: #62c9f9;
  }
  
  .buttons {
    margin-top: 20px;
  }
  
  .confirm-button {
    background: #4db6e5;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .confirm-button:hover {
    background: #62c9f9;
  }
  </style>
  