<template>
    <div class="body">
        <div class="list-container">
    <h1 class="list-title">科技風清單列表</h1>
    <ul class="custom-list">
      <li class="list-item">
        <span class="item-icon">💻</span>
        <span class="item-text">開發新功能</span>
      </li>
      <li class="list-item">
        <span class="item-icon">🔧</span>
        <span class="item-text">修復已知問題</span>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

.list-container {
  background: #1a1a2e;
  border: 2px solid #4db6e5;
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.list-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #4db6e5;
  border-bottom: 2px solid #4db6e5;
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
  background: #2a2a45;
  border: 1px solid #4db6e5;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  transition: background 0.3s, transform 0.2s;
}

.list-item:hover {
  background: #4db6e5;
  color: #1a1a2e;
  transform: scale(1.05);
}

.item-icon {
  font-size: 20px;
  margin-right: 10px;
}

.item-text {
  flex: 1;
  font-size: 16px;
}

</style>