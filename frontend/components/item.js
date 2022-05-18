import { useRouter } from 'next/router'

export default function Item({item}) {
  const router = useRouter()

  const buy = () => {
    console.log(item)
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg hover:opacity-75 cursor-pointer" onClick={buy}>
      <div className="flex flex-col px-4 py-5 sm:px-6">
        <div className="flex flex-row gap-1">
          <h2>Name:</h2>
          <p>{item.name}</p>
        </div>
        <div className="flex flex-row gap-1">
          <h2>Price:</h2>
          <p>{item.price} <span>XPF</span></p>
        </div>
      </div>
    </div>
  )
}