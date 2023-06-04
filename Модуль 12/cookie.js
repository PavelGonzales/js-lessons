const result = document.cookie.split('; ').reduce((acc, item) => {
  const [key, value] = item.split('=')
  acc[key] = value

  return acc
}, {})

const decodeResult = document.cookie.split('; ').reduce((acc, item) => {
  const [key, value] = item.split('=')
  acc[decodeURIComponent(key)] = decodeURIComponent(value)
  
  return acc
}, {})