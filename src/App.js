import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Layout } from './Layout/Layout'
import { setTheme } from './redux/slices/clickSlice'

function App() {
   const dispatch = useDispatch()
   const { theme } = useSelector(state => state.click)

   useEffect(() => {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
         dispatch(setTheme(storedTheme))
      }
   }, [dispatch])

   useEffect(() => {
      localStorage.setItem('theme', theme)
      theme === 'Light'
         ? (document.body.style.backgroundColor = 'rgba(0, 0, 0, .950)')
         : (document.body.style.backgroundColor = '#e6e6e6')
   }, [theme])

   return (
      <>
         <Layout />
      </>
   )
}

export default App
