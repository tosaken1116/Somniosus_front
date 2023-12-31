/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  post: {
    status: 200
    /** success */
    resBody: Types.CreateTweetResponse
    /** tweet to delete */
    reqBody: Types.CreateTweetPayload
  }
}
