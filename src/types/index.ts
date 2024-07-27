interface User {
    username:   string
    name:       string
    bio:        string
    password:   string
}

interface Post {
    content:    string
    userId:     number
}

interface Comment extends Post {
    postId:     number
}

export type {User, Post, Comment}