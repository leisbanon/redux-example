
//用户常量Stata
export const user = {
    userId:'USER_ID',
    userName:'USER_NAME',
}

// 酒店常量State
export const hotel = {
    roomId:'ROOM_ID',
    roomNumber:'ROOM_NUMBER',
}

// 书籍常量State
export const book = {
    bookName:'BOOK_NAME',
}

/**
 * 创建Action 函数
 */
// 用户ID
export const userId = (text) => {
    return {
        type:user.userId,
        text
    }
 }

//书籍名称
export const bookName = (text) => {
    return {
        type:book.bookName,
        text
    }
}