import firebase, {firebaseRef} from 'app/firebase/index';
import moment from 'moment';

export var setSearchText = (searchText)=>{
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};
export var addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};

export var startAddTodo = (text) => {
    return (dispatch, getState) => {
        var todo = {
            text: text,
            completed: false,
            createdAt: moment().format('MMM Do, YYYY @ hh:mm:ss A'),
            completedAt: null
        };
        var todoRef = firebaseRef.child('todos').push(todo);
        console.log(todoRef);
        return todoRef.then(()=>{
            dispatch(addTodo({
                   ...todo,
                   id: todoRef.key
               }));
        });
    }
};

export var loadToDos = () => {
    return (dispatch, getState)=>{
        var todosRef = firebaseRef.child('todos');
        return todosRef.once('value').then((snapshot)=>{
            var todos = snapshot.val() || {};

            var parseTodo = [];

            Object.keys(todos).forEach((todoId)=>{
                parseTodo.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });
            console.log(parseTodo);      
            dispatch(addToDosToScreen(parseTodo));
        });
    };
};

export var showCompletedTodos = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var updateToDoStatus = (id, updateTodo) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updateTodo
    };
};

export var startToggleTodo = (id, completed)=>{
    return (dispatch, getState) => {
        var updateTodo = {
            completed,
            completedAt: completed ? moment().format('MMM Do, YYYY @ hh:mm:ss A') : null
        };

        var updateRef = firebaseRef.child(`todos/${id}`);
       return updateRef.update(updateTodo).then(()=>{
            dispatch(updateToDoStatus(id, updateTodo));
        })
    }
}

export var addToDosToScreen = (todos)=>{
    return {
        type: 'LOAD_TODOS',
        todos
    }
} 