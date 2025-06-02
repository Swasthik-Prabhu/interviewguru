import { useAuth } from './context/AuthContext'

function App() {
  const { login } = useAuth()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Login as:</h1>
      <div className="space-x-4">
        <button
          onClick={() => login('student')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Student
        </button>
        <button
          onClick={() => login('admin')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Admin
        </button>
        <button
          onClick={() => login('institution')}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Institution
        </button>
      </div>
    </div>
  )
}

export default App
