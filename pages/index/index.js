//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    todo: '',
    todos: []
  },
  bindTodoInput: function(e) {
    // console.log('bindTodoInput before', this.data.todo)
    this.setData({
      todo: e.detail.value
    })
    // console.log('bindTodoInput before', this.data.todo)
  },
  saveTodo: function() {
    // console.log('saveTodo')
    const {todo, todos} = this.data
    const newTodo = {
      todo: this.data.todo,
      completed: false
    }
    todos.push(newTodo)
    console.log('saveTodo', todo, todos)
    this.setData({
      todo: '',
      todos: todos
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
