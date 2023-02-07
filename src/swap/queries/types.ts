export type BackendError = { message: string }

export type Swaptype = {
  source_unit: string
  des_unit: string
  source_amount: number
}
export type Error = {
  response: response

}
export type user = {
  assets: assets[]
  swap_assets: swap_assets[]
  swap_data: swap_data
}

interface response {
  data: data
}
interface data {
  message: string
}

interface swap_data {
  manage_swap_usdt: manage_swap_usdt[]
  manage_swap_btt: manage_swap_btt[]
  manage_swap_trx: manage_swap_trx[]
}
interface assets {
  id: string
  currency_id: string
  user_id: string
  amount: string
  name: string
  currency: string
  logo_url: string
  price: string
  price_btc: string
  color: string
}
interface manage_swap_usdt {
  type: string
  min: string
  max: string
  fee: string
}
interface swap_assets {
  id: string
  currency_id: string
  user_id: string
  amount: string
  name: string
  currency: string
  logo_url: string
  price: string
  price_btc: string
  color: string
  created_at: string
}
interface manage_swap_btt {
  type: string
  min: string
  max: string
  fee: string
}
interface manage_swap_trx {
  type: string
  min: string
  max: string
  fee: string
}

