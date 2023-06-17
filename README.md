## [Vue3](https://cn.vuejs.org/)

### 一、基础语法

- Vue3 包含 `Option Api(VOA)` 和 `Composition Api(VCA)`

- CDN 使用：`<script src="https://unpkg.com/vue @3/dist/vue.global.js"> </script>`

- Vue2 拦截的原理：Object.defineProperty
  - 缺点：1.只能一个一个属性进行拦截，对于属性多的对象，需要进行循环，如果对象是有嵌套的对象，就需要递归。 2.无法监听数组的改变

```html
<div id="root">1111</div>
<script>
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
</script>
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

### 二、Option Api

- less/scss 在 style 中使用：`npm i less/scss 大专的学历去找`

- 模板语法：插值，双大括号，当做 JS 地盘执行，可以数字运算，三元运算符

```html
<div>{{ name }}</div>
<script>
  data() {
    return {
      name: 'xiaoming',
    };
  }
</script>
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

  <script>
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
  </script>
  ```

  - v-show：display：none

  ```html
  <div v-show="isShow">我是动态显示与隐藏的-指令v-show</div>
  <script>
    data() {
        return {
          isShow: true,
        };
      },
  </script>
  ```

  - v-if：节点在网页上动态创建与删除

  ```html
  <div v-if="isShow">我是动态创建与删除的</div>
  <script>
    data() {
        return {
          isShow: true,
        };
      },
  </script>
  ```

  - v-for：遍历数组和对象，数组支持解构

  ```html
  <!-- 遍历数组 -->
  <ul>
    <li v-for="{text,status},index in arr">
      <span v-if="status === 1">{{ text }}</span>
    </li>
  </ul>
  <script>
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
  </script>

  <!-- 遍历对象  赚钱啊，工作工作工作工作谢冬玲 -->
  <ul>
    <li v-for="value,key,index in obj" style="margin-bottom: 10px">
      值：{{ value }} <br />
      键：{{ key }} <br />
      索引：{{ index }}
    </li>
  </ul>
  <script>
    const obj = {
      data() {
        return { obj: { name: 'xiaoqiu', age: 18, location: '大连' } };
      },
    };
  </script>
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
  <script>
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
  </script>
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
    <script>
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
    </script>
    ```

  - v-html：动态渲染 html 节点，谨慎使用，遇到不安全的脚本会有 XSS 攻击

  ```html
  <div v-html="myHtml"></div>
  <script>
    {
      data() {
        return {
          myHtml: '<div style="color:red;">11</div>',
        };
      },
    }
  </script>
  ```

  - 表单上的 `v-model`：表单上动态绑定 value 值，通过 onChange 事件改变 value 值，实现双向绑定

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
  <script>
    {
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
    }
  </script>
  ```

  - 组件上的 `v-model`原理：父组件传递一个受控属性给子组件，子组件接收并设置为控件的 value 值，并调用父组件传递的回调方法触发改变父组件的受控属性，实现双向绑定

  ```vue
  <!-- 父组件 -->
  <Field :value="username" @event="handleEvent" />
  <script>
  export default {
    data() {
      return {
        username: '11',
      };
    },
    methods: {
      handleEvent(value) {
        console.log(value);
        this.username = value;
      },
    },
    components: {
      Field,
    },
  };
  </script>
  <!-- Field子组件 -->
  <template lang="">
    <div>
    {{ label }}-{{ value }}
    <input :type="type" :value="value" @input="handleInput"> </div>
  </template>
  <script>
  export default {
    props: ['label', 'type', 'value'],
    methods: {
      handleInput(evt) {
        this.$emit('event', evt.target.value);
      },
    },
  };
  </script>
  ```

  - 组件上的 `v-model` 语法糖：父组件使用 v-model="xxx"，子组件接收是 modelValue，触发的回调函数名称是`update:modelValue`。也支持修改别名

  ```vue
  <!-- 父组件 -->
  <template>
    <Field v-model="username" />
    <!-- 被解析为
    <Field
      :modelValue="username"
      @update:modelValue="(newValue) => (username = newValue)"
    /> -->
  </template>
  <script>
  export default {
    data() {
      return {
        username: 'sss',
      };
    },
  };
  </script>
  <!-- Field子组件 -->
  <template>
    <div>
      {{ label }}-{{ modelValue }}
      <input :type="type" :value="modelValue" @input="$emit('update:qiuli', evt.target.value);"> </div>
    </div>
  </template>
  ```

  - v-model 表单修饰符
    - v-model.lazy
    - v-model.number
    - v-model.trim

  ```html
  <div id="root">
    <!-- v-model.lazy：在 "change" 事件后同步更新而不是 "input" -->
    <input type="text" v-model.lazy="input1" />
    {{input1}}
    <!-- v-model.number：用户输入自动转换为数字 -->
    <input type="text" v-model.number="input2" />
    {{input2}}
    <!-- v-model.trim：去除前后两端空格 -->
    <input type="text" v-model.trim="input3" />
    {{input3}}
  </div>
  ```

  - v-slot：插槽，简写为#，父组件使用插槽时只能用在 template 标签或子组件标签上。有多个插槽的时候，使用具名插槽。

  ```vue
  <!-- 普通插槽 -->
  <Child> 我是Child组件的内容 </Child>
  <!-- Child组件 -->
  <template>
    <div>
      <h2>Child组件</h2>
      <slot></slot>
    </div>
  </template>
  <!-- 具名插槽 -->
  <template>
    <div>
      <Child>
        <template v-slot:header> Header头部 </template>
        <template v-slot:main>Main主区域</template>
        <template #footer>Footer底部</template>
      </Child>
    </div>
  </template>
  <!-- Child组件 -->
  <template>
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  </template>
  ```

- computed 计算属性：会缓存，只会执行一次，重复调用从缓存读取。计算属性可读可写，视图层当属性调用

  - 与 methods 的区别：computed 有缓存，methods 不会缓存。

  ```html
  <div id="root">
    <!-- 方法返回计算一个值 -->
    <div>{{methodName()}}</div>
    <div>{{methodName()}}</div>
    <!-- 调用计算属性当属性调用 -->
    <div>{{computedName}}</div>
    <div>{{computedName}}</div>
    <!--   -->
    <div>{{computedDate}}</div>
  </div>
  <script>
    {
      data() {
        return {
          name: 'qiu',
          year: 2012,
          month: 12,
          day: 10,
        };
      },
      // 计算属性：会缓存，多次调用只会执行一次
      computed: {
        // 只读
        computedName() {
          console.log('计算属性'); // 执行一次
          return this.name.slice(0, 1).toUpperCase() + this.name.slice(1);
        },
        // 可写可读，不能在getter内发异步请求或更改DOM
        computedDate: {
          get() {
            return `${this.year}-${this.month}-${this.day}`;
          },

          set(value) {
            console.log(value);
            [this.year, this.month, this.day] = value.split('-');
          },
        },
      },
      // 方法：不会缓存
      methods: {
        methodName() {
          console.log('方法'); //执行多次
          return this.name.slice(0, 1).toUpperCase() + this.name.slice(1);
        },
        // 事件处理器
      },
    }
  </script>
  ```

- watch 侦听器：实时监听 data 对象内的属性，名字跟 data 内的属性一样

  - 与 computed 的区别：computed 是同步返回计算结果，不可异步请求和 DOM 操作；watch 可以是只读的也可以是可写的，watch 可以实时监听 data 属性的值，getter 函数内可以异步请求和 DOM 操作。

  - 监听普通字符串：

  ```html
  <div id="root">
    <input type="text" v-model="name" />
  </div>
  <script>
    watch: {
      // 监听字符串：时刻监听name的变化
      name(value) {
        console.log(value);
      },
    }
  </script>
  ```

### 三、[Vite](https://cn.vitejs.dev/guide/) + Vue 的 Option Api

- 使用 Vite 安装

```bash
npm create vite@latest
```

- 单文件组件 SFC：由 template、script 和 style 组成

```vue
<template>
  <div>
    <ul>
      <li v-for="item in menuList" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: ['首页', '用户管理', '权限管理'],
    };
  },
};
</script>

<!-- 局部样式 -->
<style scoped>
div {
  width: 200px;
}

ul li {
  padding: 20px;
  cursor: pointer;
}
</style>
```

- 父子通信：

  - 父传子：是单向数据流，父传给子的属性，子不允许修改；如果子要修改，可以将属性赋值成自己状态，或者在计算属性中改

  ```vue
  <!-- 父组件 -->
  <template>
    <!-- 1.单个单个透传，动态属性动态绑定 -->
    <NavBar :title="title1" left="返回" right="首页" />
    <!-- 2.在一个对象上传 -->
    <NavBar
      v-bind="{
        title: '我的电影2',
        left: '返回',
        right: '首页',
      }"
    />
    <!-- 3.对象放在data内，动态绑定传 -->
    <NavBar v-bind="navBarObj" />
  </template>

  <script>
  import NavBar from './01-父传子/NavBar.vue';
  export default {
    data() {
      return {
        title1: '我的电影1',
        navBarObj: {
          title: '我的电影3',
          left: '返回',
          right: '首页',
        },
      };
    },
    components: {
      NavBar,
    },
  };
  </script>
  <!-- 子组件 -->
  <template>
    <div>
      <h2>navbar</h2>
      <button>{{ left }}</button>
      <span>{{ computedTitle }}</span>
      <button>{{ right }}</button>
    </div>
  </template>
  <script>
  export default {
    // 第一种写法：接收父组件的props参数，视图层访问不用this，逻辑层访问需要this.xxx
    props: ['title', 'left', 'right'],
    // 第二种写法：
    props: {
      title: String,
      left: {
        type: Boolean,
        required: true,
      },
      right: {
        type: Boolean,
        // 默认值，不传也可
        default: true,
      },
      dataList: {
        type: String,
        // 自定义类型校验函数
        validator(value) {
          return ['success', 'danger', 'error', 'info'].includes(value);
        },
      },
    },
    computed: {
      computedTitle() {
        return this.title + '-加工后的title';
      },
    },
  };
  </script>
  ```

  - 子传父：中间人模式。在父组件上定义事件，传给子组件，子组件调用父组件的事件，实现子传父

  ```vue
  <!-- 父组件 -->
  <Child title="标题" @event="handleEvent" />
  <script>
  handleEvent(value) {
    console.log('触发了父组件的方法', value);
  },
  </script>
  <!-- 子组件 -->
  <button @click="handleClick">点击</button>
  <button @click="$emit('event', childTilte)">点击</button>
  <script>
  handleClick() {
    // 触发父组件的事件实现通信
    this.$emit('event', this.childTilte);
   },
  </script>
  ```

- 属性透传：父组件引用子组件时，在子组件上加的属性或方法等，都会透传到子组件的根节点上。如果不想要属性透传，在子组件上禁止透传，设置 `inheritAttrs: false`。如果想要属性透传到其他标签上，设置 `v-bind = "$attrs"`，父组件的属性会与合并到该标签上。

```vue
<!-- 子组件 -->
<template>
  <div class="navbarRoot">
    <!-- v-bind="$attrs" 让父组件的属性透传到该标签  -->
    <div v-bind="$attrs" class="aaa" style="font-size: 20px">
      只有我才可以接收父组件透传下来的属性
    </div>
  </div>
</template>

<script>
export default {
  // 禁止父组件的属性透传
  inheritAttrs: false,
};
</script>
```

- \$ref：绑定在 dom 节点上，获取 dom 节点元素；绑定在组件上，获取组件的实例对象，一定程度上可以实现父子通信。在 dom 节点或标签上添加 `ref=xxx`, 访问时通过 `this.$ref.xxx`

```js
<input type="text" ref="username" v-model="username" />;
this.$refs.username; // 获取input节点，去设置值或样式等
```

- $root && $parent：$root 访问根节点，$parent 访问父组件

```js
this.$parent.value; // 访问父组件的value
this.$parent.$parent.value; // 访问爷爷组件的value
this.$root.value; // 访问根组件的value
```

- 跨级通信：provide && inject。嵌套多级的子组件，想要共享父组件的数据时

```js
// 父组件做生产者
provide() {
  return {
    // 把app这一整个组件实例传下去，响应式的Proxy对象才能修改app的属性,
    app: this,
  };
},
// 子组件做消费者，接收父组件共享的属性
{
  inject: ['app'],
  methods: {
    handleHome() {
      console.log(this.title, this.app);
    },
  },
}
<span @click="handleClick2">{{ app.title }}</span>

handleClick2() {
  // this.app 是响应式的，可以修改父组件的data
  console.log(this.app);
  this.app.title = this.data;
},
```

- 跨级通信：订阅发布设计模式实现

- 动态组件：通过`<component :is="which" />`，which 是组件名字，vue2 需要在组件内部显示声明组件名字，vue3 在 setup 下自动生成组件名字。动态组件配合<KeepAlive>可以缓存想缓存的组件。

```vue
<KeepAlive include="home,list">
  <component :is="which" />
</KeepAlive>

<script>
export default {
  // vue2：声明组件名字
  name: 'center',
};
</script>
```

- 异步组件：让组件按需加载，可以优化首屏加载速度

```js
List: defineAsyncComponent({
  // 加载函数
  loader: () => import('./List.vue'),

  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
  // 展示加载组件前的延迟时间，默认为 200ms
  delay: 200,

  // 加载失败后展示的组件
  errorComponent: ErrorComponent,
  // 如果提供了一个 timeout 时间限制，并超时了
  // 也会显示这里配置的报错组件，默认值是：Infinity
  timeout: 1000,
}),
```

- 生命周期钩子函数

  - 创建

    - beforeCreate：拿不到数据层
    - created：拿得到数据层，一般初始化数据
    - beforeMount：拿到数据层，拿不到 DOM 节点
    - mounted： 1.拿到 DOM 节点 2.ajax 3.订阅发布 4.window 全局事件绑定

  - 更新
    - beforeUpdate：更新之前做点事情
    - updated：所有状态改变都会执行这个钩子函数
    - nextTick：特定状态改变才执行更新，使用时 `this.$nextTick()`
  - 销毁
    - beforeUnmount
    - unmounted：组件卸载时，手动清空 window 上挂载的事件或全局定义的定时器

- 自定义指令：拿到 dom 节点，对 dom 节点操作。指令也有生命周期，常用的有 mounted 和 updated。以局部自定义指令为例.

```vue
<template>
  <div>
    <div v-niki>111</div>
    <div v-niki="'blue'">222</div>
    <div v-niki="'green'">333</div>
    <div v-niki="whichColor">333</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      whichColor: 'gray',
    };
  },
  // 局部自定义指令
  directives: {
    // niki: {
    //   // 只会在初始化执行一次，如果指令的值是状态，状态修改完后没有再次触发
    //   mounted(el, binding) {
    //     console.log(el, binding);
    //     el.style.background = binding.value ?? 'red';
    //   },
    //   // 所以状态更新，重新触发一次
    //   updated(el, binding) {
    //     console.log(el, binding);
    //     el.style.background = binding.value ?? 'red';
    //   },
    // },

    // 官方提供了函数写法简写mounted和updated生命周期
    niki(el, binding) {
      console.log(el, binding);
      el.style.background = binding.value ?? 'red';
    },
  },
};
</script>
```

### 四、[Vite](https://cn.vitejs.dev/guide/) + Vue 的 Composition Api(函数式编程)

- setup: 生命周期函数-页面初始化即执行，setup(props,trigger)，props 是父组件传递的属性，trigger 内含很多事件，常用的是 emit

- reactive：把对象变成响应式的, 底层是用 Proxy 拦截，视图层和事件内要用导出的 state 对象去访问属性

```vue
<template>
  <div>
    <div>{{ state.count }}</div>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      count: 0,
    });
    const handleClick = () => {
      console.log('handleClick');
      state.count++;
    };
    return {
      state,
      handleClick,
    };
  },
};
</script>
```

- ref: ref 不仅可以绑定 dom 节点，可以绑定组件，还可以包装元素，让它变成响应式的，底层还是用的 Proxy 拦截，但是 Proxy 只能包装对象，所以直接用 ref 包裹元素，Proxy 会把它变成 new Proxy({ value: 0 })，在视图层使用直接使用变量名，在事件中要用变量名.value

```vue
<template>
  <div>
    {{ count }}
    <button @click="handleClick">click</button>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  setup() {
    const count = ref(0);
    const handleClick = () => {
      // console.log(count);
      count.value++;
    };
    return {
      count,
      handleClick,
    };
  },
};
</script>
```

- reactive 和 ref 互相转换

```vue
<!-- reactive 转 ref -->
<template>
  <div>
    {{ name }}-{{ age }}
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const state = reactive({
      name: 'niki',
      age: 18,
    });
    const handleClick = () => {
      state.name = 'niki-click';
      state.age = 20;
    };
    return {
      handleClick,
      // 对state对象内的属性统一转换
      ...toRefs(state),
    };
  },
};
</script>
<!-- ref 转 reactive -->
<template>
  <div>
    {{ state.name }} - {{ state.age }} - {{ state.location }}
    <button @click="handleClick">click</button>
  </div>
</template>
<script>
import { reactive, toRef } from 'vue';
export default {
  setup() {
    const name = toRef('niki');
    const age = toRef(18);
    const state = reactive({
      location: '广东',
      // 把ref转成reactive
      name,
      age,
    });
    const handleClick = () => {
      name.value = 'niki-click';
      age.value = 20;
      state.location = '汕头';
    };
    return {
      state,
      handleClick,
    };
  },
};
</script>
```

- computed 计算属性

```vue
<template>
  <div>
    {{ computedName }}
  </div>
</template>
<script>
import { computed } from 'vue';
export default {
  setup() {
    const computedName = computed(
      () => state.name.slice(0, 1).toUpperCase() + state.name.slice(1)
    );
    return {
      computedName,
    };
  },
};
</script>
```

- watch 侦听器
  - 第一次页面展示不会立刻执行，等状态变化再执行
  - 参数可以拿到当前值和原始值
  - 可以侦听多个状态的变化

```vue
<template>
  <div>
    <input type="text" v-model="mytext" />
    <select v-model="select">
      <option value="111">111</option>
      <option value="222">222</option>
      <option value="333">333</option>
    </select>
  </div>
</template>
<script>
import { ref, watch } from 'vue';
export default {
  setup() {
    const mytext = ref('');
    const select = ref(111);
    // 写法一
    watch(
      mytext,
      (newvalue, oldvalue) => {
        console.log('ajax', newvalue, oldvalue);
      },
      // 一上来就触发
      { immediate: true }
    );
    // 写法二
    // watch(
    //   () => mytext.value,
    //   (newvalue, oldvalue) => {
    //     console.log(newvalue, oldvalue);
    //   }
    // );
    // 写法三：多个侦听
    // watch([mytext, select], (newvalue, oldvalue) => {
    //   console.log(newvalue, oldvalue);
    // });
    return {
      mytext,
      select,
    };
  },
};
</script>
```

- watchEffect
  - 第一次页面展示立刻执行
  - 不需要监听，代码中有状态变化就执行
  - 不需要传递很多参数，只要传递一个回调函数
  - 不能获取当前值和原始值

```js
watchEffect(async () => {
  const res = await axios(`http://localhost:3000/list?author=${select.value}`);
  selectList.value = res.data;
});
```

- 属性传递

```vue
<!-- 父组件 -->
<template>
  <div>
    <NavBar
      :title="title"
      :left="true"
      :right="true"
      @leftevent="handleEvent"
    />
  </div>
</template>
<script>
import { ref } from 'vue';
import NavBar from './Navbar.vue';
export default {
  components: {
    NavBar,
  },
  setup() {
    const title = ref('首頁');
    const handleEvent = (value) => {
      console.log('handleEvent', value);
    };
    return {
      title,
      handleEvent,
    };
  },
};
</script>
<!-- 子组件 -->
<template>
  <div>
    <button v-show="left" @click="handleLeft">返回</button>
    <span>{{ computedTitle }}</span>
    <button v-show="right">首页</button>
  </div>
</template>
<script>
import { computed } from 'vue';
export default {
  props: {
    left: Boolean,
    right: Boolean,
    title: String,
  },
  // setup的第一个参数是props参数
  setup(props, trigger) {
    const computedTitle = computed(() => props.title + '1111');
    const handleLeft = () => {
      trigger.emit('leftevent', '来自子组件的问候');
    };
    return {
      computedTitle,
      handleLeft,
    };
  },
};
</script>
```

- provide 与 inject 跨级通信：子组件拿到父组件共享的属性，都是响应式的

```vue
<!-- 父组件 -->
<script>
import { provide, ref } from 'vue';
export default {
  setup() {
    const which = ref('List');
    const show = ref(true);
    // 生产者
    provide('which', which);
    provide('show', show);
    return {
      which,
      show,
    };
  },
};
</script>
<!-- 子组件 -->
<script>
import { inject, onMounted } from 'vue';
export default {
  setup() {
    const show = inject('show');
    onMounted(() => {
      show.value = false;
    });
  },
};
</script>
```

- 生命周期

  - setup：相当于 beforeCreated 和 created
  - onBeforeMount
  - onMounted
  - onBeforeUpdate
  - onUpdated
  - nextTick
  - onBeforeUnmount
  - onUnmounted

- setup 语法糖：`<script setup></script>`

### 五、[Vue-Router](https://router.vuejs.org/zh/guide/)

- 安装`vue-router`模块

```bash
npm i vue-router@4
```

- 路由使用

```js
// 路由定制
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/films' },
  // {
  //   path: '/',
  //   redirect: { name: 'filmspage' } // 跳到命名路由为filmspage的页面
  // },
  {
    path: '/films',
    component: () => import('../views/films/Films.vue'),
    // name: 'filmspage', // 命名路由
    children: [
      // 嵌套路由
      {
        path: 'nowplaying',
        component: () => import('../views/films/components/Nowplaying.vue'),
      },
      {
        path: 'comingsoon',
        component: () => import('../views/films/components/Comingsoon.vue'),
      },
      {
        path: '/films',
        redirect: '/films/nowplaying',
      },
    ],
  },
  {
    path: '/cinemas',
    component: () => import('../views/Cinemas.vue'),
  },
  {
    path: '/center',
    alias: '/wode', // 别名，/wode和/center都可以访问我的页面
    component: () => import('../views/Center.vue'),
    // 需要路由守卫拦截的页面
    meta: {
      auth: true,
    },
  },
  {
    path: '/detail/:id', // params 动态路由传参
    component: () => import('../views/Detail.vue'),
    name: 'detailpage',
  },
  // {
  //   path: "/detail", // query 路由传参
  //   component: Detail,
  //   name: 'detailpage'
  // },
  {
    path: '/login',
    name: 'loginpage',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 匹配 /aaa /aaa/bbb /aa/bb/cc ...
    component: () => import('../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 全局路由守卫拦截
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.name !== 'loginpage' && !isAuthenticated && to.meta.auth)
    next({ name: 'loginpage' });
  else next();
});

// 对于分析、更改页面标题、声明页面等辅助功能
router.afterEach((to, from) => {
  // console.log(to.fullPath);
});

export default router;

// 路由注册
createApp(App).use(router).mount('#app');
```

- 声明式导航 `router-link`：custom 定制化渲染标签，在 router-link 插槽内直接写标签，会渲染成这种结构的 dom 结构

```html
<ul>
  <!-- router-link：custom 定制化渲染标签，在router-link插槽内直接写标签，会渲染成这种结构的dom结构 -->
  <router-link to="/films" custom v-slot="{ isActive, navigate }">
    <li @click="navigate" :class="isActive ? 'nikiActive' : ''">电影</li>
  </router-link>
  <router-link to="/cinemas" custom v-slot="{ isActive, navigate }">
    <li @click="navigate" :class="isActive ? 'nikiActive' : ''">影院</li>
  </router-link>
  <router-link to="/center" custom v-slot="{ isActive, navigate }">
    <li @click="navigate" :class="isActive ? 'nikiActive' : ''">我的</li>
  </router-link>
</ul>
<style>
  .nikiActive {
    color: red !important;
  }
</style>
```

- 动态路由：

```js
const routes = [
  {
    path: '/detail/:id', // params 动态路由传参
    component: () => import('../views/Detail.vue'),
    name: 'detailpage',
  },
];
```

- 编程式导航：`useRouter`

```js
import { useRouter } from 'vue-router';
const router = useRouter();
// 1.params传参方式：两种写法  /detail/:id
router.push(`/detail/${filmId}`);
router.push({
  name: 'detailpage', // detail路由页面的命名路由
  params: {
    id: filmId, // id是动态路由占位符
  },
});
// 2.query传参方式：/detail?id=1000   /detail
router.push({
  path: '/detail', // detail路由页面的命名路由
  query: {
    id: filmId, // id是动态路由占位符
  },
});
```

- 动态路由页面获取参数

```js
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
onMounted(() => {
  console.log('mounted ajax', route.params.id); // params传参
  // console.log('mounted', route.query.id);// query传参
});
// 猜你喜欢点击功能
const handleClick = () => {
  router.push(`/detail/1000`);
};
onBeforeRouteUpdate((to, from) => {
  // 在当前路由改变，但是该组件被复用时调用，猜你喜欢点击后跳转当前页面
  console.log('mounted ajax', to.params.id);
});
```

- 路由模式：

  - hash：`createWebHashHistory` url 带#，通过 window.onhashchange 监听 url 的变化
  - history：`createWebHistory` 利用了浏览器的历史堆栈（history stack）来实现无刷新的页面导航

- 全局路由守卫： `beforeEach` 和 `afterEach`

```js
// 全局拦截，后台管理系统 所有页面需要鉴权
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  if (to.name !== 'loginpage' && !isAuthenticated) next({ name: 'loginpage' });
  else next();
});

// 某些页面需要鉴权，通过to.path判断或者to.meta
router.beforeEach((to, from, next) => {
  // console.log(to.path);
  const isAuthenticated = localStorage.getItem('token');
  if (
    (to.name !== 'loginpage' && !isAuthenticated && to.path === '/center') ||
    to.path === '/wode'
  )
    next({ name: 'loginpage' });
  else next();
});
router.beforeEach((to, from, next) => {
  // console.log(to);
  const isAuthenticated = localStorage.getItem('token');
  if (to.name !== 'loginpage' && !isAuthenticated && to.meta.auth)
    next({ name: 'loginpage' });
  else next();
});

// 对于分析、更改页面标题、声明页面等辅助功能
router.afterEach((to, from) => {
  // console.log(to.fullPath);
});
```

- 路由懒加载：拆分 JS 代码打包体积，按需加载，优化首屏加载速度

```js
// import Center from "../views/Center.vue";
const Center = () => import('../views/Center.vue'),
```

### 六、Vuex 的 VCA 分模块化写法

- 安装 vuex 和 vuex-persistedstate 持久化插件

```bash
npm i vuex vuex-persistedstate
```

- 定义 CinemaModule 模块

```js
import { GET_CINEMA_LIST } from '../mutation-types';
import axios from 'axios';

const CinemaModule = {
  namespaced: true, // 命名空间
  state() {
    return {
      cinemaList: [],
    };
  },
  // 同步
  mutations: {
    [GET_CINEMA_LIST](state, { payload }) {
      state.cinemaList = payload;
    },
  },
  // 同步+异步
  actions: {
    async fetchCinemaList(state, { payload }) {
      // console.log(state, payload);
      const res = await axios({
        url:
          'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=3873125',
        headers: {
          'X-Client-Info':
            '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
          'X-Host': 'mall.film-ticket.cinema.list',
        },
      });
      // 异步请求完成之后触发一个commit同步改变state的数据
      state.commit({
        type: GET_CINEMA_LIST,
        payload: res.data.data.cinemas,
      });
    },
  },
  // state的计算属性，当state内的状态需要处理又需要共享时
  getters: {
    filterCinemaList(state) {
      return (type) => {
        return state.cinemaList.filter((item) => item.eTicketFlag === type);
      };
    },
  },
};

export default CinemaModule;
```

- 引入 CinemaModule 模块

```js
import { createStore } from 'vuex';
import CinemaModule from './module/CinemaModule';
// vuex持久化
import createPersistedState from 'vuex-persistedstate';
const store = createStore({
  plugins: [
    createPersistedState({
      reducer: (state) => {
        return {
          cinemaList: state.CinemaModule.cinemaList,
          // ...
        };
      },
    }),
  ],
  modules: {
    // ...
    CinemaModule,
  },
});
export default store;
```

- 全局注册 store

```js
import { createApp } from 'vue';
import './style.css';
import App from './04-Vuex/VCA写法/App.vue';
import store from './04-Vuex/VCA写法/store';
import router from './04-Vuex/VCA写法/router';
createApp(App).use(router).use(store).mount('#app');
```

- 页面访问 store 的 state 和 getters

```js
import { useStore } from 'vuex';
const store = useStore();
// 访问state
store.state.CinemaModule.cinemaList;
// 访问getters
store.getters[`CinemaModule/filterCinemaList`](type);
```

- 页面访问 actions

```js
store.dispatch({
  type: 'CinemaModule/fetchCinemaList',
  payload: '参数传递测试',
});
```

### 七、Pinia：分 Option Store 写法和 Setup Store 写法，只是 stroe 写法不同，页面中使用一样，在这里记录 Setup Store 写法。每一个 store 都以 use 开头

- 安装 Pinia

```bash
npm i pinia
```

- 定义 useCinemaStore

```js
import { defineStore } from 'pinia';
import axios from 'axios';
import { computed, ref } from 'vue';

export const useCinemaStore = defineStore('cinema', () => {
  const cinemaList = ref([]);

  const fetchCinemaList = async (payload) => {
    console.log(payload);
    const res = await axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=3873125',
      headers: {
        'X-Client-Info':
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16789325361560653676412929"}',
        'X-Host': 'mall.film-ticket.cinema.list',
      },
    });
    // 异步请求完成之后改变state的数据
    cinemaList.value = res.data.data.cinemas;
  };

  // computed替换getters
  const test = computed(() => 'test');

  const filterCinemaList = computed(() => {
    return (type) => {
      return cinemaList.value.filter((item) => item.eTicketFlag === type);
    };
  });

  return {
    cinemaList,
    fetchCinemaList,
    test,
    filterCinemaList,
  };
});
```

- 全局注入 Pinia

```js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './05-Pinia/App.vue';
import router from './05-Pinia/router';
createApp(App).use(router).use(createPinia()).mount('#app');
```

- 页面访问 store 的 state 、getters[computed] 和 actions[methods]

```js
import { useCinemaStore } from '../store/Setup Store写法/useCinemaStore';
const store = useCinemaStore();
// 访问state
store.cinemaList;
// 访问computed属性，getters
store.filterCinemaList(type);
// 访问methods，actions
store.fetchCinemaList({
  payload: '参数传递',
});
```

### FAQ、Vue2 与 Vue3 的区别

- Vue2 有 filters，Vue3 抛弃了
- Vue2 单文件组件的 template 内需用一个根节点包裹，Vue3 可以多节点并存
