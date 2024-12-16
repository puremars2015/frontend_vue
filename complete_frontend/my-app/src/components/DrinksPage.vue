<template>
    <div class="body">
      <div class="menu-container">
        <h1 class="menu-title">訂購飲料清單</h1>
        <div class="drink-grid">
          <div class="menu-item" v-for="(drink, index) in drinks" :key="index">
            <span class="item-icon">{{ drink.icon }}</span>
            <span class="item-text">{{ drink.name }}</span>
            <button class="order-button">訂購</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DrinkMenu',
    data() {
      return {
        drinks: [
          { icon: '🧋', name: '珍珠奶茶' },
          { icon: '🍹', name: '水果茶' },
          { icon: '☕', name: '拿鐵咖啡' },
          { icon: '🥤', name: '氣泡飲' },
          { icon: '🍵', name: '抹茶拿鐵' },
          { icon: '🍋', name: '檸檬茶' },
          { icon: '🥛', name: '鮮奶茶' },
          { icon: '🫖', name: '熱紅茶' },
          { icon: '🍑', name: '蜜桃果茶' },
          { icon: '🍇', name: '葡萄汁' },
          { icon: '🍓', name: '草莓奶昔' },
          { icon: '🍈', name: '哈密瓜冰沙' },
          { icon: '🍍', name: '鳳梨冰茶' },
          { icon: '🥥', name: '椰子水' },
          { icon: '🍒', name: '櫻桃汁' },
          { icon: '🥝', name: '奇異果冰沙' },
          { icon: '🍏', name: '青蘋果茶' },
          { icon: '🫐', name: '藍莓果汁' },
          { icon: '🍹', name: '熱帶水果茶' },
          { icon: '🍶', name: '清酒風味飲' },
        ],
      };
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
  
  .menu-container {
    background: #1a1a2e;
    border: 2px solid #4db6e5;
    border-radius: 10px;
    padding: 20px;
    width: 800px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .menu-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #4db6e5;
    border-bottom: 2px solid #4db6e5;
    padding-bottom: 10px;
  }
  
  .drink-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #2a2a45;
    border: 1px solid #4db6e5;
    border-radius: 5px;
    padding: 15px;
    transition: background 0.3s, transform 0.2s;
    text-align: center;
  }
  
  .menu-item:hover {
    background: #4db6e5;
    color: #1a1a2e;
    transform: scale(1.05);
  }
  
  .item-icon {
    font-size: 40px;
    margin-bottom: 10px;
  }
  
  .item-text {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .order-button {
    background: #4db6e5;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .order-button:hover {
    background: #62c9f9;
    color: #1a1a2e;
  }
  </style>
  