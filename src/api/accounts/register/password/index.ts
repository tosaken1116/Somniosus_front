/* eslint-disable */
import type * as Types from '../../../@types'

export type Methods = {
  post: {
    status: 201
    /** success */
    resBody: Types.OkResponse
    /** password to create */
    reqBody: Types.RegisterPasswordPayload
  }
}
