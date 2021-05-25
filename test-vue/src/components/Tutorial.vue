<template>


  <div>
   <label v-for="label in options" v-bind:key="label.value">
<input type="radio"
  v-model="current"
v-bind:value="label.value">{{ label.label }}

    </label>
    <table>
      <!-- テーブルヘッダー -->
      <thead>
      <tr>
      <th class="id">ID</th>
        <th class="comment">コメント</th>
        <th class="state">状態</th>
        <th class="button"></th>
      </tr>
      </thead>
      <tbody>
      <!-- ここに <tr> で ToDo の要素を1行づつ繰り返し表示 -->
      <tr v-for="item in computedTodos" v-bind:key="item.id">
        <th>{{ item.id }}</th>
        <td>{{ item.comment }}</td>
        <td class="state">
          <!-- 状態変更ボタンのモック -->
          <button v-on:click="doChangeState(item)">
              {{ labels[item.state] }}
            
            </button>
        </td>
        <td class="button">
          <!-- 削除ボタンのモック -->
     <button v-on:click="doRemove(item)">
            
            削除</button>
        </td>

        
      </tr>
      </tbody>

      
    </table>
 <h2>新しい作業の追加</h2>
    <form class="add-form" v-on:submit.prevent="doAdd">
      <!-- コメント入力フォーム -->
      コメント <input type="text" ref="comment">
      <!-- 追加ボタンのモック -->
      <button type="submit">追加</button>
    </form>
 

  </div>

</template>

<script>
import todoStorage from '../plugins/todoStorage'
export default {
  name: 'Tutorial',
  data () {

      return {
      todos: [],
      uid: 0,
      options:[
        { value: -1, label: 'すべて' },
        { value: 0, label: '作業中' },
        { value: 1, label: '完了' },
        {value:2, label :'test' }
      ],
      current:-1
    } 
  },
  computed: {
    labels () {
      return this.options.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.label })
      }, {})
      // キーから見つけやすいように、次のように加工したデータを作成
      // {0: '作業中', 1: '完了', -1: 'すべて'}
    },
    computedTodos: function () {
      // データ current が -1 ならすべて
      // それ以外なら current と state が一致するものだけに絞り込む
      return this.todos.filter(function (el) {
        return this.current < 0 ? true : this.current === el.state
      }, this)
    }
  },
    created()
  {
      this.todos=todoStorage.fetch();
      this.uid=this.todos.lenght
  },
  watch: {
    // オプションを使う場合はオブジェクト形式にする
    todos: {
      // 引数はウォッチしているプロパティの変更後の値
      handler: function (todos) {
        todoStorage.save(todos)
      },
      // deep オプションでネストしているデータも監視できる
      deep: true
    }
  },
  methods:{
    //追加処理
      doAdd:function(event, value)
      {
         
       // ref で名前を付けておいた要素を参照
      let comment = this.$refs.comment
      // 入力がなければ何もしないで return
      if (!comment.value.length) {
        return
      }
          //新しいID、コメント、作業状態
             this.todos.push({
        id: this.uid++,
        comment: comment.value,
        state: 0
      })

          
          //フォーム要素を空にする
          comment.value='';
      },
      // 状態変更の処理
    doChangeState: function (item) {
      item.state = item.state ? 0 : 1 ,2
    },
    // 削除の処理
    doRemove: function (item) {
      const index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
      
  }
  }
 


</script>

<style scoped>
</style>