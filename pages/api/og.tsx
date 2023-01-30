//@ts-nocheck
import { ImageResponse } from '@vercel/og'
import { checkEnvUrl } from '../../lib/checkEnvUrl'

export const config = {
  runtime: 'edge',
}

const fontURL = new URL('../../public/static/font/BebasNeue.ttf', import.meta.url);

const font = fetch(fontURL).then(res => res.arrayBuffer())

export default async function handler() {
  const fontData = await font;

  const url = checkEnvUrl()
  const coverBg = `${url}static/images/my-picture.jpg`

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
          fontFamily: 'Bebas Neue'
        }}
      >
        <div tw="flex items-center bg-white w-full h-full p-10 bg-black">

          <div tw="flex items-center justify-center w-[150px] h-[150px] border-[3px] border-[#c383fb] rounded-full ">
            <img src={coverBg} alt="" style={{ width: 130, height: 130, display: 'flex', objectFit: 'contain', borderRadius: '9999px' }} />
          </div>
          <div tw="ml-10 flex flex-col my-auto">
            <h1 tw="text-6xl mb-2 text-[#c383fb] font-bold">
              Lucas Vieira
            </h1>
            <p tw="text-3xl text-white">Fullstack Developer 👨‍💻</p>
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
          style: 'normal'
        }
      ],
      headers: {
        'Cache-Control': 's-maxage=86400'
      }
    },
  )
}
