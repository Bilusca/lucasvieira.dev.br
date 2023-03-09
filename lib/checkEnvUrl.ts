export function checkEnvUrl(): string {
  const properUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://www.lucasvieira.dev/'
      : 'http://localhost:3000/'

  return properUrl
}
