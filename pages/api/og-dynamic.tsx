// @ts-nocheck
import { ImageResponse } from '@vercel/og'
// eslint-disable-next-line
import { NextRequest } from 'next/server';
import { checkEnvUrl } from '../../lib/checkEnvUrl'

export const config = {
  runtime: 'edge',
}

const fontURL = new URL(
  '../../public/static/font/BebasNeue.ttf',
  import.meta.url,
)

const font = fetch(fontURL).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  const url = new URL(req.url)
  const fontData = await font

  const hasTitle = url.searchParams.has('title')
  const hasDescription = url.searchParams.has('description')

  const title = hasTitle
    ? url.searchParams.get('title')?.slice(0, 100)
    : 'Título default'

  const description = hasDescription
    ? url.searchParams.get('description')
    : 'Descrição default'

  const hostUrl = checkEnvUrl()
  const coverBg = `${hostUrl}static/images/my-picture.jpg`

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
          fontFamily: 'Bebas Neue',
        }}
      >
        <div tw="flex items-center bg-white w-full h-full p-6 bg-black">
          <div tw="flex items-center justify-center w-[150px] h-[150px] border-[3px] border-[#c383fb] rounded-full ">
            <img
              src={coverBg}
              alt=""
              style={{
                width: 130,
                height: 130,
                display: 'flex',
                objectFit: 'contain',
                borderRadius: '9999px',
              }}
            />
          </div>
          <div tw="ml-10 flex flex-col my-auto">
            <h1 tw="text-4xl mb-2 text-[#c383fb] font-bold">{title}</h1>
            <p tw="text-2xl text-white">{description}</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 630,
      height: 300,
      emoji: 'blobmoji',
      fonts: [
        {
          name: 'Bebas Neue',
          data: fontData,
          style: 'normal',
        },
      ],
      headers: {
        'Cache-Control': 's-maxage=86400',
      },
    },
  )
}
