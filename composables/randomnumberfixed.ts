export const random_number = () => useState<number>('number', () => Math.round(Math.random() * 10))

