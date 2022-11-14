export function saveLocalStorage(
  key: string,
  value: string | Record<string, any> | undefined
) {
  try {
    if (typeof value === 'string') {
      localStorage.setItem(key, value)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  } catch (err) {
    console.log('err', err)
  }
}

export function getLocalStorage(key: string, isString = true) {
  try {
    const value = localStorage.getItem(key)

    if (value) {
      if (isString) return value
      return JSON.parse(value)
    }
  } catch (err) {
    console.log('err', err)
  }
}

export function clearLocalStorage(key: string) {
  try {
    localStorage.removeItem(key)
  } catch (err) {
    console.log('err', err)
  }
}
