<template>
    <div class="body">
        <div class="login-container">
        <div class="login-box">
            <h1>Login</h1>
            <form>
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" v-model="username" placeholder="Enter your username">
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" placeholder="Enter your password">
                </div>
                <button type="submit" class="login-button" @click="login()">Login</button>
            </form>
        </div>
    </div>
    </div>

</template>

<script>
export default {
    name: 'TheLogin',
    // 當按下登入按鈕時，會觸發這個方法
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
        // 取得使用者輸入的帳號密碼
        const username = this.username;
        const password = this.password;
        // 假設帳號密碼都是 admin
        if (username === 'admin' && password === 'admin') {
            // 登入成功
            alert('Login success');
            
            // 導向main-page
            this.$router.push('/main-page');
        } else {
            // 登入失敗
            alert('Login failed');
        }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
    margin: 0;
    font-family: 'Comic Sans MS', cursive, sans-serif; /* 友好的字體風格 */
    background: linear-gradient(to bottom, #ffe8e8, #fff7da); /* 柔和的飲料店背景色 */
    color: #4a4a4a; /* 溫暖的文字顏色 */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100vh;
}

.login-container {
    width: 100%;
    max-width: 400px;
    padding: 25px;
    background: #ffffff; /* 卡片風格的背景 */
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* 淡淡的陰影效果 */
}

.login-box h1 {
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
    color: #ff7675; /* 帶有飲料感的粉色 */
}

.input-group {
    margin-bottom: 20px;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.9em;
    color: #4a4a4a;
}

.input-group input {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 2px solid #ffeaa7; /* 輕鬆的黃色邊框 */
    border-radius: 12px; /* 圓潤的設計 */
    background: #fffaf3; /* 柔和的背景色 */
    color: #4a4a4a;
    outline: none;
    transition: border-color 0.3s, transform 0.2s;
}

.input-group input:focus {
    border-color: #fab1a0; /* 焦點時的暖色變化 */
    transform: scale(1.02); /* 微放大效果 */
}

.input-group input::placeholder {
    color: #b2bec3;
}

.login-button {
    width: 100%;
    padding: 12px;
    font-size: 1em;
    background: linear-gradient(to right, #81ecec, #74b9ff); /* 飲料風的漸層色 */
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s ease;
}

.login-button:hover {
    background: linear-gradient(to right, #74b9ff, #81ecec);
    transform: translateY(-2px); /* 按鈕懸停的輕微浮動效果 */
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); /* 提升按鈕層次 */
}

.input-group input {
    width: 100%; /* 與按鈕寬度一致 */
    padding: 12px; /* 與按鈕的內邊距一致 */
    font-size: 1em;
    border: 2px solid #ffeaa7; /* 輕鬆的黃色邊框 */
    border-radius: 12px; /* 圓潤的設計，與按鈕一致 */
    background: #fffaf3; /* 柔和的背景色 */
    color: #4a4a4a;
    outline: none;
    transition: border-color 0.3s, transform 0.2s;
    box-sizing: border-box; /* 確保內邊距不影響寬度 */
}

.input-group input:focus {
    border-color: #fab1a0; /* 焦點時的暖色變化 */
    transform: scale(1.02); /* 微放大效果 */
}

.input-group input::placeholder {
    color: #b2bec3;
}

.login-button {
    width: 100%; /* 與 input 保持一致 */
    padding: 12px; /* 與 input 保持一致 */
    font-size: 1em;
    background: linear-gradient(to right, #81ecec, #74b9ff); /* 飲料風的漸層色 */
    color: #fff;
    border: none;
    border-radius: 12px; /* 與 input 保持一致 */
    cursor: pointer;
    transition: 0.3s ease;
}

.login-button:hover {
    background: linear-gradient(to right, #74b9ff, #81ecec);
    transform: translateY(-2px); /* 按鈕懸停的輕微浮動效果 */
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1); /* 提升按鈕層次 */
}

</style>
