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
    $('.list').on('click', 'span',function(){
        removeTodo($(this).parent())
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
     var newTodo = $('<li>'+ todo.name + '<span>X</span></li>');
     newTodo.data('id', todo._id)
     newTodo.addClass("task");
     $('.list').append(newTodo);
       if(todo.completed){
           newTodo.addClass("done");
       }
}

function removeTodo(todo){
     var clickedId = todo.data('id');
        var deleteUrl = '/api/todo/'+clickedId
        
        $.ajax({
            method: 'DELETE',
            url: deleteUrl
        })
        .then(function(data){
            todo.remove();
        })
        .catch(function(err){
            console.log(err);
        })
}