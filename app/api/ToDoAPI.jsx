var $ = require('jQuery');

module.exports = {
    filteredToDOs: function (todos,completedToDos,searchTodos) {
        //Filter Data according to Completed Status
        var filteredTodos = todos;
        filteredTodos = filteredTodos.filter(function (todo) {
            return !todo.completed || completedToDos;
        });
        //Filter Acccroding to Search Text
        filteredTodos = filteredTodos.filter((todo)=>{
            var todoText = todo.text.toLowerCase();
            return searchTodos.length === 0 || todoText.indexOf(searchTodos) > -1;
        });

        //Sort Data
        filteredTodos.sort((a,b)=>{
            if(!a.completed && b.completed) {
                return -1;
            }
            else if(a.completed && !b.completed) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return filteredTodos;
    }
};