import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
 
return(
   
   <section class="App">
<TwitterFollowCard isfollowing userName="midudev">
    <h1>Miguel angel duran</h1>
    
    </TwitterFollowCard> 


<TwitterFollowCard isfollowing={false}  userName='pheralb' name="pablo hernandez" />
<TwitterFollowCard userName='eduardlon' name="eduard londoño" />
   </section>
)


}