export function BlankCard() {
  return (
    <div className="group flex flex-col border-2 border-black rounded-2xl max-w-[22.5rem] mx-auto animate-pulse">
      <div className="relative w-[22.3rem]  h-[17.25rem] border-b-2 border-black bg-gray-300 rounded-t-2xl"></div>
      <div className="py-6 px-4 flex flex-col gap-6">
        <div className="h-[36px] w-full bg-gray-300 rounded-lg"></div>
        <div className="flex flex-col gap-2">
          <div className="h-[20px] w-full bg-gray-300 rounded-lg"></div>
          <div className="h-[20px] w-full bg-gray-300 rounded-lg"></div>
          <div className="h-[20px] w-full bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}
