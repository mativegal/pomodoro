export const timeFuntionality = 'WORK' | 'SHORT' | 'BREAK' | 'CUSTOM'

export const timeFormatter = (time) => {
  return `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}:${Math.floor(time % 60)
    .toString()
    .padStart(2, '0')}`
}
