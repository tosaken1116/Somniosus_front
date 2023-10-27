/* eslint-disable */
export type OkResponse = {
  message?: string | undefined
}

export type ErrorResponse = {
  message?: string | undefined
}

export type RegisterAccountPayload = {
  id: string
  name: string
}

export type UpdateAccountPayload = {
  name?: string | undefined
  description?: string | undefined
  image_url?: string | undefined
  birth_day?: string | undefined
  website_url?: string | undefined
}

export type Account = {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  image_url?: string | undefined
  birth_day?: string | undefined
  website_url?: string | undefined
}

export type CreateTweetPayload = {
  content?: string | undefined
  image_url_list?: string[] | undefined
  account_id?: string | undefined
  reply_to?: string | undefined
  root?: string | undefined
}

export type CreateTweetResponse = {
  id?: string | undefined
  content?: string | undefined
  image_url_list?: string[] | undefined
  created_at?: string | undefined
  account_id?: string | undefined
  reply_to?: string | undefined
  root?: string | undefined
}

export type TweetItem = {
  id?: string | undefined
  content?: string | undefined
  image_url_list?: string[] | undefined
  created_at?: string | undefined
  account_id?: string | undefined
  reply_to?: string | undefined
  root?: string | undefined
}

export type GetTweetResponse = {
  timeline?: TweetItem[] | undefined
}

export type Like = {
  account_id?: string | undefined
  tweet_id?: string | undefined
}
