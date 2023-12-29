import { Address } from "@graphprotocol/graph-ts"

export const OPEN = 'open'
export const EXECUTED = 'executed'
export const CANCELLED = 'cancelled'

export function getAddressByNetwork(network: string): Address {
  if (network == 'mainnet') {
    return Address.fromString('0xd412054cca18a61278ced6f674a526a6940ebd84')
  } if (network == 'rinkeby') {
    return Address.fromString('0xd412054cca18a61278ced6f674a526a6940ebd84')
  } if (network == 'bsc') {
    return Address.fromString('0x74C58472f67A698DD12D61f82c3Cb0474fE9851e')
  }

  throw 'No Address specified'
}
