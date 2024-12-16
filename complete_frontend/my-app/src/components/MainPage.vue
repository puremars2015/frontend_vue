<template>
    <div class="body">
        <div class="list-container">
    <h1 class="list-title">夢想飲料POS系統</h1>
    <ul class="custom-list">
      <li class="list-item" @click="openMenu()">
        <span class="item-icon">💻</span>
        <span class="item-text">進入點單系統</span>
      </li>
      <li class="list-item">
        <span class="item-icon">🔧</span>
        <span class="item-text">錯誤回報</span>
      </li>
      <li class="list-item">
        <span class="item-icon">📊</span>
        <span class="item-text">分析使用者數據</span>
      </li>
      <li class="list-item">
        <span class="item-icon">🌐</span>
        <span class="item-text">更新網站內容</span>
      </li>
    </ul>
  </div>
    </div>
</template>

<script>
export default {
  name: 'MainPAge',
  methods: {
    openMenu() {
      this.$router.push('/drinks-page');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
    margin: 0;
    font-family: 'Comic Sans MS', cursive, sans-serif; /* 手寫風格字體 */
    background: linear-gradient(135deg, #fff7da, #ffe8e8); /* 明亮柔和的飲料店背景 */
    color: #4a4a4a; /* 溫暖的文字顏色 */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100vh;
}

.list-container {
    background: #fff; /* 卡片風格背景 */
    border: 2px solid #fab1a0; /* 柔和的邊框顏色 */
    border-radius: 15px;
    padding: 25px;
    width: 380px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* 輕微陰影 */
    text-align: center;
}

.list-title {
    margin-bottom: 20px;
    font-size: 26px;
    color: #ff7675; /* 粉色標題文字 */
    border-bottom: 2px dashed #fab1a0; /* 虛線分隔符 */
    padding-bottom: 10px;
}

.custom-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.list-item {
    display: flex;
    align-items: center;
    background: #fffaec; /* 淡黃色背景 */
    border: 1px solid #ffcbc1; /* 淡粉邊框 */
    border-radius: 10px; /* 圓潤設計 */
    margin-bottom: 15px;
    padding: 12px;
    transition: background 0.3s ease, transform 0.2s ease;
    cursor: pointer;
}

.list-item:hover {
    background: #ff7675; /* 懸停時的粉紅背景 */
    color: #fff; /* 白色文字 */
    transform: scale(1.05); /* 輕微放大效果 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* 提升層次感 */
}

.item-icon {
    font-size: 22px; /* 較大的圖示 */
    margin-right: 12px;
    color: #fab1a0; /* 圖標的柔和粉色 */
}

.item-text {
    flex: 1;
    font-size: 18px; /* 字體稍大 */
    color: #4a4a4a; /* 默認文字顏色 */
    text-align: left;
}

</style>
