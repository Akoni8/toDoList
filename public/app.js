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
      addTodo(todo);
    
    });
}

function createTodo(){
    //send request to create new todo
    var userInput = $('#todoInput').val();
    $.post('/api/todo',  {name: userInput})
    .then(function(newTodo){
         var userInput = $('#todoInput').val("");
        addTodo(newTodo);
    })
    .catch(function(err){
        console.log(err);
    })
}

function addTodo(todo){
     var newTodo = $('<li>'+ todo.name + '</li>');
     newTodo.addClass("task");
     $('.list').append(newTodo);
       if(todo.completed){
           newTodo.addClass("done");
       }
       
}