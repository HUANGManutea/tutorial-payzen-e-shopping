import Head from 'next/head'
import Item from '../components/item'

export async function getServerSideProps() {
  // for tutorial purposes, easier to understand than a loop
  const data = {
    inventory: [
      {
        id: 1,
        name: "article 1",
        price: 1000
      },
      {
        id: 2,
        name: "article 2",
        price: 2000
      },
      {
        id: 3,
        name: "article 3",
        price: 3000
      },
      {
        id: 4,
        name: "article 4",
        price: 4000
      },
      {
        id: 5,
        name: "article 5",
        price: 5000
      },
      {
        id: 6,
        name: "article 6",
        price: 6000
      }
    ]
  }

  // Pass data to the page via props
  return { props: { data } }
}

export default function Home({ data }) {
  return (
    <div className="flex flex-col p-2">
      <Head>
        <title>Tutoriel Payzen e-shopping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='flex flex-row content-center justify-center'>
          <div className='flex flex-col content-center justify-center gap-2'>
            <h1 className="font-bold text-lg text-gray-600 text-center">Boutique</h1>
            <div className='grid grid-cols-4 grid-flow-row gap-2'>
              {data.inventory.map((item, i) => <Item key={i} item={item}/>)}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
