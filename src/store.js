export function getNewTodo(text) {
    return { text, isComplete: false, createdAt: Date.now() };
  }
  
  export function sort(todos) {
    return todos.sort(function(a, b) {
      if (a.isComplete && !b.isComplete) {
        return 1;
      } else if (!a.isComplete && b.isComplete) {
        return -1;
      } else {
        if (parseInt(a.createdAt) > parseInt(b.createdAt)) {
          return -1;
        } else if (parseInt(a.createdAt) < parseInt(b.createdAt)) {
          return 1;
        } else {
          return 0;
        }
      }
    })
  }