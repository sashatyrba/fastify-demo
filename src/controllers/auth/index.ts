import { Owner } from '../../models'
import { HTTP404Error } from '../../errors'

/**
 * Fetch owner by an email
 */
export const getOwnerByEmail = async (email: string) => {
  const owner = await Owner.query().findOne({
    email,
  })

  if (!owner) throw HTTP404Error

  return owner
}
