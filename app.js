// let app=new Vue({
// el:'#app',
// data:{
//     textColor: '#f00',
//     message:'hello world',

// }
// });

// let app2=new Vue({
//     el:'#app-2',
//     data:{
//         message:'現在時刻'+new Date().toLocaleString()
//     }
// })
let app3=new Vue({
    el:"#app-3",
    data: {
        seen:true
    }
})

// let app4=new Vue({
//     el:"#app-4",
//     data: {
//         todos:[
//             {text:'りんご'},
//             {text:'みかん'},
//             {text:'ぶどう'},
//         ]
//     }
// })
let app5 = new Vue ({

    el: '#app-5',
    data: {
        message: 'stressed'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

// let app6=new Vue({
//     el:'#app-6',
 
//         data:{
//             message1:'こんにちは！'
//         }

// })

Vue.component('alert-box',{
    template:`
    <div class="alert" v-on:click="caution">
    <strong>Error</strong>
    <slot></slot>
    </div>
    `,
    methods:{
        caution:function()
        {
            alert('クリックされました');
        }
    }
})
let app7=new Vue({
    el:"#app-7"
})


new Vue({
    el:"#app-7",//ID
    methods:{
    onclick:function(){
        document.write('クリック')
    }
}
})
