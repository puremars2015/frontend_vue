<template>
    <div class="body">
      <div class="menu-container">
        <h1 class="menu-title">訂購飲料清單</h1>
        <div class="drink-grid">
          <div class="menu-item" v-for="(drink, index) in drinks" :key="index">
            <span class="item-icon">{{ drink.icon }}</span>
            <span class="item-text">{{ drink.name }}</span>
            <button class="order-button" @click="orderDrink(drink.name)">訂購</button>
          </div>
        </div>
        <div class="navigation">
            <button class="navigate-button" @click="goToOrderDetails">查看訂單明細</button>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    name: 'DrinkPage',
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
    methods: {
      orderDrink(drinkName) {
        // 導向飲料詳細資訊頁面, 並帶入飲料名稱
        this.$router.push({
          name: 'DrinkDetailPage',
          query: {
            name: drinkName,
          },
        });
      },
      goToOrderDetails() {
        // 導向訂單明細頁面
        this.$router.push({ name: 'ConfirmOrder' });
    },
    },
  };
  </script>
  
  <style scoped>
.body {
  margin: 0;
  font-family: 'Comic Sans MS', cursive, sans-serif; /* 手寫風格字體 */
  background: linear-gradient(135deg, #fff7da, #ffe8e8); /* 飲料店風漸層背景 */
  color: #4a4a4a; /* 溫暖的文字顏色 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
}

.menu-container {
  background: #ffffff; /* 卡片背景 */
  border: 2px solid #fab1a0; /* 粉色邊框 */
  border-radius: 15px;
  padding: 25px;
  width: 900px; /* 適配飲料清單的寬度 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* 輕微陰影 */
}

.menu-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 26px;
  color: #ff7675; /* 粉色標題文字 */
  border-bottom: 2px dashed #fab1a0; /* 虛線分隔符 */
  padding-bottom: 10px;
}

.drink-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 列 */
  gap: 20px; /* 增加間距 */
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fffaec; /* 柔和奶油背景 */
  border: 1px solid #ffcbc1; /* 粉色邊框 */
  border-radius: 15px; /* 圓潤設計 */
  padding: 20px;
  transition: background 0.3s ease, transform 0.2s ease;
  text-align: center;
}

.menu-item:hover {
  background: #ff7675; /* 懸停時變為粉紅背景 */
  color: #fff; /* 白色文字 */
  transform: scale(1.05); /* 輕微放大效果 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* 提升層次感 */
}

.item-icon {
  font-size: 40px;
  margin-bottom: 10px;
  color: #fab1a0; /* 柔和粉色圖標 */
}

.item-text {
  font-size: 16px;
  margin-bottom: 10px;
  color: #4a4a4a; /* 默認文字顏色 */
}

.order-button {
  background: linear-gradient(to right, #81ecec, #74b9ff); /* 飲料店風漸層按鈕 */
  color: #fff; /* 白色文字 */
  border: none;
  border-radius: 10px;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.order-button:hover {
  background: linear-gradient(to right, #74b9ff, #81ecec); /* 懸停時改變漸層方向 */
  transform: scale(1.05); /* 輕微放大效果 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 提升層次 */
}

.navigation {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.navigate-button {
  background: linear-gradient(to right, #fab1a0, #ff7675); /* 粉色漸層按鈕 */
  color: #fff; /* 白色文字 */
  border: none;
  border-radius: 15px; /* 圓角設計 */
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
}

.navigate-button:hover {
  background: linear-gradient(to right, #ff7675, #fab1a0); /* 懸停漸層方向變化 */
  transform: translateY(-2px); /* 懸停輕微上移 */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); /* 提升按鈕層次 */
}
</style>
