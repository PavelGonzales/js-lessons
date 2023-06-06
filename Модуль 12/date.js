const d = new Date()

// Получаем год
d.getFullYear()

console.dir(d)

console.log(new Date('1985-10-26T09:00:00'))

console.log(new Date(1985, 10, 26, 9, 0, 0))

console.log(`${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`)

d.setMonth(10)

new Date(+new Date() + (1000 + 60 * 60 * 24))
