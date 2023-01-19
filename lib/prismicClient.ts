import prismic from '@prismicio/client'

const token = process.env.PRISMIC_KEY
const prismicApi = process.env.PRISMIC_ENDPOINT as string

export const prismicClient = prismic.createClient(prismicApi, {
  accessToken: token
})

