import useFetch from './hooks/useFetch'

function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos?_limit=12')
  const colors = [
    { name: 'Coral', value: '#ff7f50' },
    { name: 'Sky', value: '#38bdf8' },
    { name: 'Mint', value: '#34d399' },
    { name: 'Violet', value: '#8b5cf6' },
    { name: 'Sun', value: '#facc15' },
    { name: 'Rose', value: '#fb7185' },
    { name: 'Teal', value: '#14b8a6' },
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Orange', value: '#fb923c' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Lime', value: '#a3e635' },
    { name: 'Cyan', value: '#22d3ee' },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-12 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-5xl font-bold text-center mb-12 text-white drop-shadow-lg'>Color Gallery</h1>

        {loading && (
          <div className='flex flex-col items-center justify-center py-32'>
            <div className='w-16 h-16 border-4 border-blue-400 border-t-blue-600 rounded-full animate-spin'></div>
            <p className='text-2xl text-white mt-6'>Loading...</p>
          </div>
        )}

        {error && !loading && (
          <div className='bg-red-500/20 border border-red-500 rounded-lg p-8 text-center max-w-md mx-auto'>
            <p className='text-red-200 text-lg'>Error : {error}</p>
          </div>
        )}

        {data && !loading && !error && (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {colors.map((color) => (
              <div
                key={color.name}
                className='min-h-48 rounded-xl shadow-lg border border-white/10 px-6 py-8 flex items-center justify-center text-center text-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'
                style={{ backgroundColor: color.value }}
              >
                <h3 className='text-2xl font-bold tracking-wide'>{color.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
