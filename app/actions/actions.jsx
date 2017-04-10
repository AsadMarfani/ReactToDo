import firebase, { firebaseRef, gitHubProvider, fbProvider } from 'app/firebase/index';
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
        var uid = getState().auth.uid;
        var todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);
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
        var uid = getState().auth.uid;
        var todosRef = firebaseRef.child(`users/${uid}/todos`);
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
        }
        var uid = getState().auth.uid;
        var updateRef = firebaseRef.child(`users/${uid}/todos/${id}`);
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

export var startLogin = (buttonId)=>{
    return(dispatch, getState)=>{
        if(buttonId === 1) {
        return firebase.auth().signInWithPopup(gitHubProvider).then((result)=>{
            console.log('Authorization Successfull!',result);
        },(error)=>{
            console.log('Un Authorized, error occured!', error);
        });
    }
    else if(buttonId === 2) {
        return firebase.auth().signInWithPopup(fbProvider).then((result)=>{
            console.log('Authorization Successfull!',result);
        },(error)=>{
            console.log('Un Authorized, error occured!', error);
        });
    }
    }
}

export var startLogout = ()=>{
    return (dispatch, getState)=>{
        return firebase.auth().signOut().then(()=>{
            console.log('Logged Out');
        },(error)=>{
            console.log('Error occurs');
        });
    }
}

export var logInCall = (uid)=>{
    return {
        type: 'LOGIN',
        uid
    }
}

export var logOutCall = ()=>{
    return {
        type: 'LOGOUT'
    }
}