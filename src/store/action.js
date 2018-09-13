
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
    bookId:'BOOK_ID',
    bookName:'BOOK_NAME',
    bookPrice:'BOOK_PRICE',
    bookAuthor:'BOOK_AUTHOR',
}

/**
 * 创建Action 函数
 */
export const userId = (text) => {
    return {
        type:user.userId,
        text
    }
 }


