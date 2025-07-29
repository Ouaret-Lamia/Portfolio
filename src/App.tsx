import Banner from './components/Banner'
import Header from './components/Header'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-violet-200 through-violet-500 to-rose-200 "> */}
      <main className="w-full h-screen flex flex-col items-center gap-4 pt-15 mb-50">
        <Banner />
        <Skills />
        <div className="py-50 bg-white w-full"/>
        This is the main content area.
      </main>
      {/* <footer className="bg-primary text-white p-4 text-center">
        © 2023 My Application
      </footer> */}
    </div>
  )
}

export default App
