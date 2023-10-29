/* eslint-disable */
export type OkResponse = {
  message: string
}

export type ErrorResponse = {
  message: string
}

export type RegisterAccountPayload = {
  name: string
  tel_num: string
  birth_day: string
}

export type RegisterPasswordPayload = {
  id: string
  password: string
}

export type UpdateAccountPayload = {
  name?: string | undefined
  description?: string | undefined
  image_url?: string | undefined
  birth_day?: string | undefined
  website_url?: string | undefined
}

export type Account = {
  id: string
  name: string
  description: string
  image_url: string
  birth_day: string
  website_url: string
  follow_count: number
  follower_count: number
  is_following: boolean
  role: number
}

export type CreateTweetPayload = {
  content: string
  image_url_list: string[]
  reply_to?: string | null | undefined
  root?: string | null | undefined
}

export type CreateTweetResponse = {
  id: string
  content: string
  image_url_list: string[]
  created_at: string
  account_id: string
  reply_to: string
  root: string
}

export type TweetItem = {
  id: string
  content: string
  image_url_list: string[]
  created_at: string
  is_favorite: boolean
  is_retweet: boolean
  impression_count: number
  favorite_count: number
  retweet_count: number
  reply_count: number
  is_bookmark: boolean

  account: {
    id: string
    name: string
    image_url: string
    role: number
  }

  reply_to: string
  root: string

  retweet_content: {
    id: string
    content: string
    image_url_list: string[]
    created_at: string
    is_favorite: boolean
    is_retweet: boolean
    impression_count: number
    favorite_count: number
    retweet_count: number
    reply_count: number
    is_bookmark: boolean

    account: {
      id: string
      name: string
      image_url: string
      role: number
    }

    reply_to: string
    root: string
  } | null
}

export type GetTweetResponse = {
  timeline: TweetItem[]
}

export type Like = {
  account_id: string
  tweet_id: string
}
