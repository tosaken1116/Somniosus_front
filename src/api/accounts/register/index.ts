/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  post: {
    status: 201
    /** success */
    resBody: Types.OkResponse
    /** account to create */
    reqBody: Types.RegisterAccountPayload
  }
}
