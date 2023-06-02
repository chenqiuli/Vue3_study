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

  - v-bind：动态绑定属性值，可以简写为 :xx

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
    <template v-for="{text,status} in arr">
      <li v-if="status === 1">{{text}}</li>
    </template>
  </ul>
  ```

  - v-on：绑定事件，可简写为 @xx

  ```js
  <button v-on:click="changeLogin()">改变isLogin</button>
  <button @click="changeLogin">改变isLogin</button>
  const obj = {
    data() {
      return {
        arr: ['aaa', 'bbb', 'ccc'],
      };
    },
  };
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
