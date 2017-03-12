var $ = require('jQuery');

module.exports = {
    setTodos: function (todos) {
        if($.isArray(todos)) {
            localStorage.setItem('todos',JSON.stringify(todos));
            
        }
    },
    getTodos: function () {
        var stringify = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringify);
        } catch(e) {

        }
        return ($.isArray(todos)) ? todos : [];
    }
};