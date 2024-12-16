<template>
    <div class="body">
      <div class="confirm-container">
        <h1 class="confirm-title">確認訂單</h1>
        <ul class="order-summary">
          <li>
            <strong>飲料名稱：</strong>{{ drinkName }}
            <button class="edit-button" @click="editField('name')">編輯</button>
          </li>
          <li>
            <strong>糖度：</strong>{{ sugar }}
            <button class="edit-button" @click="editField('sugar')">編輯</button>
          </li>
          <li>
            <strong>冰量：</strong>{{ ice }}
            <button class="edit-button" @click="editField('ice')">編輯</button>
          </li>
          <li>
            <strong>杯數：</strong>{{ quantity }}
            <button class="edit-button" @click="editField('quantity')">編輯</button>
          </li>
        </ul>
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
        drinkName: this.$route.query.name || '未知飲料',
        sugar: this.$route.query.sugar || '全糖',
        ice: this.$route.query.ice || '正常冰',
        quantity: this.$route.query.quantity || 1,
      };
    },
    methods: {
      editField(field) {
        // 返回 OrderDetails 並傳入需要編輯的欄位
        this.$router.push({
          name: 'OrderDetails',
          query: {
            name: this.drinkName,
            sugar: field === 'sugar' ? this.sugar : this.$route.query.sugar,
            ice: field === 'ice' ? this.ice : this.$route.query.ice,
            quantity: field === 'quantity' ? this.quantity : this.$route.query.quantity,
            editField: field, // 傳遞當前需要編輯的欄位
          },
        });
      },
      submitOrder() {
        // 假設提交訂單成功後返回主頁
        alert(
          `訂單確認：\n飲料名稱：${this.drinkName}\n糖度：${this.sugar}\n冰量：${this.ice}\n杯數：${this.quantity}`
        );
        this.$router.push({ name: 'DrinkMenu' });
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
    width: 400px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .confirm-title {
    font-size: 24px;
    color: #4db6e5;
    margin-bottom: 20px;
  }
  
  .order-summary {
    list-style: none;
    padding: 0;
    margin: 0 0 20px 0;
    text-align: left;
  }
  
  .order-summary li {
    margin-bottom: 10px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  