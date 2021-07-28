import Header from '../components/header'

function Layout ({children}){
    return <div>

         <Header/>
         <main>
             {children}
         </main>
         <footer>
             design by Emre
         </footer>
         
    </div>
}

export default Layout