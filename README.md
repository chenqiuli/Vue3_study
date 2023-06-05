## [Vue3](https://cn.vuejs.org/)

### 一、基础语法

- CDN 使用：`<script src="https://unpkg.com/vue @3/dist/vue.global.js"> </script>`

- Vue2 拦截的原理：Object.defineProperty
  - 缺点：1.只能一个一个属性进行拦截，对于属性多的对象，需要进行循环，如果对象是有嵌套的对象，就需要递归。 2.无法监听数组的改变

```js
<div id="root">1111</div>;
const obj = {};
Object.defineProperty(obj, 'myname', {
  get() {
    console.log('get');
    return root.innerHTML;
  },
  set(value) {
    console.log('set', value);
    root.innerHTML = value;
  },
});
```

- Vue3 拦截的原理：ES6 的 Proxy
  - 优点：1.对整个 obj 对象进行拦截，代理整个对象。 2.直接监听数组变化

```js
const obj = {};
// vm是生成的代理对象，使用vm对象才会拦截到对象的改变
const vm = new Proxy(obj, {
  get(obj, key) {
    console.log('get', root.innerHTML);
    return obj[key];
  },
  set(obj, key, value) {
    console.log('set');
    obj[key] = value;
    root.innerHTML = value;
  },
});
```

- Vue3 向下兼容了 Vue2 的拦截：

```js
if (支持Proxy) {
  // Proxy拦截处理，实现功能
} else {
  Object.defineProperty;
}
```

- 模板语法：插值，双大括号，当做 JS 地盘执行，可以数字运算，三元运算符

```js
<div>{{ name }}</div>;
const obj = {
  data() {
    return {
      name: 'xiaoming',
    };
  },
};
// app是个全局变量，用来调试Vue中data的属性的
var app = Vue.createApp(obj).mount('#root');
```

- 指令

  - v-bind：动态绑定属性值，可以简写为 :xx="XXX"，XXX 当做 JS 地盘执行

  ```html
  <div v-bind:class="color1">改变背景颜色1</div>
  <div :class="color2">改变背景颜色2</div>
  <div :class="isLogin ? 'red':'yellow'">改变背景颜色3</div>
  <!-- 动态绑定多个属性在标签上 -->
  <img :src="imgUrl" alt="" :width="imgWidth" />
  <!-- 如果有多个需要绑定的属性在一个标签上，可以抽离出来一个对象 -->
  <img v-bind="imgObj" />
  <!-- 对象写法 -->
  <div :class="classObj">多个class类名-对象写法</div>
  <!-- 数组写法 -->
  <div :class="classArr">多个class类名-数组写法</div>
  ```

  ```js
  const obj = {
    data() {
      return {
        isLogin: true,
        color1: 'red',
        color2: 'yellow',
        imgUrl: 'https://sponsors.vuejs.org/images/vehikl.png',
        imgWidth: 200,
        // 抽离出来
        imgObj: {
          src: 'https://sponsors.vuejs.org/images/vehikl.png',
          width: 200,
        },
        // 是true的就会设置上，可以动态添加或删除
        classObj: {
          aaa: true,
          bbb: false,
          ccc: true,
        },
        // 可以动态添加或删除
        classArr: ['aaa'],
      };
    },
  };
  ```

  - v-show：display：none

  ```js
  <div v-show="isShow">我是动态显示与隐藏的-指令v-show</div>;
  const obj = {
    data() {
      return {
        isShow: true,
      };
    },
  };
  ```

  - v-if：节点在网页上动态创建与删除

  ```js
  <div v-if="isShow">我是动态创建与删除的</div>;
  const obj = {
    data() {
      return {
        isShow: true,
      };
    },
  };
  ```

  - v-for：遍历数组和对象，数组支持解构

  ```js
  // 数组
  <ul>
    <li v-for="{text,status},index in arr">
      <span v-if="status === 1">{{ text }}</span>
    </li>
  </ul>;
  const obj = {
    data() {
      return {
        arr: [
          {
            text: '手机1',
            status: 0,
          },
          {
            text: '手机2',
            status: 1,
          },
          {
            text: '手机3',
            status: 1,
          },
        ],
      };
    },
  };
  // 对象
  <ul>
    <li v-for="value,key,index in obj" style="margin-bottom: 10px">
      值：{{ value }} <br />
      键：{{ key }} <br />
      索引：{{ index }}
    </li>
  </ul>;
  const obj = {
    data() {
      return {
        obj: {
          name: 'xiaoqiu',
          age: 18,
          location: '大连',
        },
      };
    },
  };
  ```

  - v-for 与 v-if：不可同用在一个标签上

  ```html
  <ul>
    <!-- 1.template标签实际上不会被创建出来，只是作为包裹多节点的标签 -->
    <template v-for="{text,status},index in arr" :key="index">
      <li v-if="status === 1">{{text}}</li>
    </template>
  </ul>
  ```

  - v-on：绑定事件，可简写为 @xx

  ```html
  <div id="root">
    <!-- 内联事件处理器 -->
    {{count1}}
    <button @click="count++">add</button>
    <button @click="count--">delete</button>
    {{count2}}
    <button @click="handleClick(1,2,3,$event)">点击</button>
    <!-- 方法事件处理器 -->
    <ul @click="handleUlClick">
      <li @click="handleClick111">111</li>
      <li @click="(event) => handleClick222(1,2,3,event)">222</li>
    </ul>
  </div>
  ```

  ```js
  const obj = {
    data() {
      return {
        count1: 0,
        count2: 0,
      };
    },
    methods: {
      handleClick(a, b, c, event) {
        console.log(a, b, c, event);
        this.count2++;
      },
      // 可以拿到event事件
      handleClick111(event) {
        console.log('111', event.target);
      },
      handleClick222(a, b, c, event) {
        console.log(a, b, c, event);
        event.stopPropagation();
      },
      handleUlClick() {
        console.log('handleUlClick');
      },
    },
  };
  ```

  - 事件修饰符

    - @click.stop：阻止冒泡
    - @click.self：让父节点的事件不要影响到子节点
    - @click.prevent：阻止默认行为，表单的提交，a 链接跳转
    - @click.once：只能点击一次

    ```html
    <div id="root">
      <ul @click="handleUlClick">
        <!-- @click.stop 阻止冒泡 -->
        <li @click.stop="handleClick111">111</li>
        <li @click="(event) => handleClick222(event)">222</li>
      </ul>

      <!-- @click.self 让handleUlClick2的事件只作用于自己身上，子节点点了不会有冒泡行为 -->
      <ul @click.self="handleUlClick2">
        <li @click="handleClick333">333</li>
      </ul>

      <!-- @click.once：只能点击一次 -->
      <div @click.once="handleOnce">我只能点击一次</div>

      <!-- @click.prevent：阻止默认行为 -->
      <form action="" @click.prevent="handleSubmit">
        <input type="submit" value="submit" />
      </form>
    </div>
    ```

    ```js
    const app = Vue.createApp({
      data() {
        return {};
      },
      methods: {
        // 可以拿到event事件
        handleClick111(event) {
          console.log('111', event.target);
        },
        handleClick222(event) {
          console.log(event);
          event.stopPropagation();
        },
        handleUlClick() {
          console.log('handleUlClick');
        },
        handleUlClick2() {
          console.log('handleUlClick2');
        },
        handleClick333() {
          console.log('handleClick333');
        },
        handleOnce() {
          console.log('once');
        },
        handleSubmit(event) {
          // event.preventDefault();
          console.log('submit');
        },
      },
    });
    app.mount('#root');
    ```

  - v-html：动态渲染 html 节点，谨慎使用，遇到不安全的脚本会有 XSS 攻击

  ```js
  <div v-html="myHtml"></div>;
  const obj = {
    data() {
      return {
        myHtml: '<div style="color:red;">11</div>',
      };
    },
  };
  ```

  - v-model：表单与数据 双向绑定
    - 原理：表单上动态绑定 value 值，通过 onChange 事件改变 value 值，实现双向绑定

  ```html
  <div id="root">
    <h2>输入框-{{inputValue}}</h2>
    <input type="text" v-model="inputValue" />
    <h2>多行文本输入-{{textareaValue}}</h2>
    <textarea type="text" v-model="textareaValue"></textarea>
    <h2>单个复选框-{{isChecked}}</h2>
    <input type="checkbox" v-model="isChecked" />是
    <h2>多个复选框-{{checkArr}}</h2>
    <input type="checkbox" v-model="checkArr" value="篮球" />篮球
    <input type="checkbox" v-model="checkArr" value="乒乓球" />乒乓球
    <input type="checkbox" v-model="checkArr" value="足球" />足球
    <h2>单选框-{{picked}}</h2>
    <input type="radio" value="篮球" v-model="picked" />篮球
    <input type="radio" value="乒乓球" v-model="picked" />乒乓球
    <input type="radio" value="足球" v-model="picked" />足球
    <h2>下拉框-{{selected}}</h2>
    <select v-model="selected">
      <option value="篮球">篮球</option>
      <option value="乒乓球">乒乓球</option>
      <option value="足球">足球</option>
    </select>
  </div>
  ```

  ```js
  const app = Vue.createApp({
    data() {
      return {
        inputValue: '',
        textareaValue: '',
        isChecked: true,
        picked: '篮球',
        checkArr: ['篮球'],
        selected: '篮球',
      };
    },
  });
  app.mount('#root');
  ```
