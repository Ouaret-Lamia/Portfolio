import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-b from-violet-200 through-violet-500 to-rose-200 "> */}
      <main className="w-full flex flex-col items-center pt-15">
        <Banner />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
