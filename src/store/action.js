
//用户常量Stata
export const user = {
    userId:'USER_ID',
    userName:'USER_NAME',
}

// 书籍常量State
export const book = {
    addBook:'ADD_BOOK',
    deleteBook:'DELETE_BOOK',
}


//创建Action 函数 => 用户ID
export const userId = (text) => {
    return {
        type:user.userId,
        text
    }
 }
//创建Action 函数 => 用户姓名
export const userName = (text) => {
    return {
        type:user.userName,
        text
    }
}

//定义异步Action 处理函数 => 更新用户名
export const fetchUserName = (username) => {
    return dispatch => {
        // Promise 模拟异步网络请求的处理
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(username);
            }, 1000);
        }).then(v => {
            dispatch(userName(v));
        })
    }
}




//添加书籍
export const addBookAction = (text) => {
    return {
        type:book.addBook,
        text
    }
}

// 删除书籍
export const deleteBookAction = (text) => {
    return {
        type:book.deleteBook,
        text
    }
}