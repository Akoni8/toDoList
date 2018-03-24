$(document).ready(function(){
    //"/api/todos"
    $.getJSON("/api/todo")
    .then(addTodos)
    
    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            //create todo
            createTodo();
        }
    })
});

function addTodos(todos){
    //add todos to page
    todos.forEach(function(todo){
       var newTodo = $('<li class = "task">'+ todo.name + '</li>');
       if(todo.completed){
           newTodo.addClass("done");
       }
       $('.list').append(newTodo);
    });
}

function createTodo(){
    //send request to create new todo
    var userInput = $('#todoInput').val();
    $.post('/api/todo',  {name: userInput})
    .then(function(newTodo){
        console.log(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}