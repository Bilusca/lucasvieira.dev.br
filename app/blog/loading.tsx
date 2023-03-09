import { BlankCard } from '../../components/BlankCard'

export default function Loading() {
  return (
    <main>
      <h1 className="text-center text-shadow-purple font-bold text-6xl lg:text-8xl tracking-tighter mb-20 lg:mb-40">
        Artigos no site
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10">
        <BlankCard />
        <BlankCard />
        <BlankCard />
      </div>
    </main>
  )
}
