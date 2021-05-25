let app1= new Vue({
    el:'#app',
    methods:{
        onClick:function()
        {
           
            document.write('クリック1')
          
        }
    }
})

let app2=new Vue({
    el:"#app-1",
    methods:{
        onClick:function()
        {
document.write("クリック2")

alert('クリック')
        }
    }
})

let app3=new Vue({
    el:"#app-2",
methods:{
    onClickCtrl:function()
{
    alert('クリック３')
}
}
})

let app4=new Vue({
    el:"#app-3",
    methods:{
onChange:function(){
    document.write("変更されました");
}
    }
})