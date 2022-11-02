import { NextApiRequest, NextApiResponse } from 'next'
import {profile} from "../../../content/profiles";
import {Profile} from "../../../interface"

type ResponseError = {
  message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Profile | ResponseError>)
    {
      const { query } = req
      const { id } = query
      const filtered = profile.filter((p) => p.username === id)
      return filtered.length > 0
        ? res.status(200).json(filtered[0])
        : res.status(404).json({ message: `User with id: ${id} not found.` })

}
