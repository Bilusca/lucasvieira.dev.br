//@ts-nocheck
import { ImageResponse } from '@vercel/og'
import { checkEnvUrl } from '../../lib/checkEnvUrl'


export const config = {
  runtime: 'edge',
}

const fontURL = new URL('../../public/static/font/ka1.ttf', import.meta.url);

const font = fetch(fontURL).then(res => res.arrayBuffer())

export default async function handle() {
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
          fontFamily: 'Karmatic Arcade'
        }}
      >
        <div tw="flex items-center bg-white w-full h-full p-20 bg-gray-900">

          <div tw="flex items-center justify-center w-[300px] h-[300px] border-[3px] border-[#c383fb] rounded-full ">
            <img src={coverBg} alt="" style={{ width: 280, height: 280, display: 'flex', objectFit: 'contain', borderRadius: '9999px' }} />
          </div>
          <div tw="ml-10 flex flex-col my-auto">
            <h1 tw="text-4xl font-bold mb-5 text-white">
              Lucas Vieira
            </h1>
            <p tw="text-xl text-white">Fullstack Developer 👨‍💻</p>
          </div>

        </div>
      </div>
    ),
    {
      width: 800,
      height: 600,
      emoji: 'blobmoji',
      fonts: [
        {
          name: 'FirCode',
          data: fontData,
          style: 'normal'
        }
      ]
    },
  )
}
