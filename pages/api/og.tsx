import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

export default async function (req: NextRequest) {
  const { host, protocol } = new URL(req.url)
  const coverBg = `${protocol}//${host}/static/images/my-picture.png`

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <div tw="flex bg-white w-full h-full p-20 bg-gray-900">

          <img src={coverBg} alt="" style={{ width: 350 }} />
          <div tw="ml-10 flex flex-col gap-10 my-auto">
            <h1 tw="text-8xl text-bold tracking-tighter font-bolder mb-10 text-white">
              Lucas Vieira
            </h1>
            <p tw="text-4xl text-white">Fullstack Developer 👨‍💻</p>
          </div>

        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
