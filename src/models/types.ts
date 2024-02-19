export type Comment = {
    creator: string
    message: string
    createdAt: string
    id: number
    img: string
}

export type Post = {
    city: string
    id: number
    imgsrc: string
    liked: boolean
    comments: Comment[]
    likes: Like[]
}

export type LikedPost = {
    city: string
    creator: string
    id: number
    imgsrc: string
}

export type Like = {
    user_id?: string
}

export type User = {
    id: string
    imgurl: string
    liked: LikedPost[]
    name: string
    newPosts: Post[]
    newStatus: string
}

export type PopupType = 'add' | 'edit' | 'icon' | 'image' | 'confirm' | 'close' | 'auserimage'
