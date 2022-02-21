import { FcAcceptDatabase,FcAndroidOs,FcAdvance,FcAlarmClock } from "react-icons/fc";
import "./style.css"
/////side navbar 
function Nav() {
    return(
<div className="nav">
<div> 
    <section id= 'first'>
        <h1><FcAcceptDatabase className="icon" size="4em"/> </h1>
    </section>
    <section id= 'second'>
        <h1><FcAndroidOs className="icon" size="4em"/></h1>
    </section>
    <section id= 'third'>
    <h1><FcAdvance className="icon"  size="4em"/></h1>
    </section>
    <section id= 'fourth'>
    <h1><FcAlarmClock  className="icon" size="4em"/></h1>
    </section>
</div>
</div>
    )
}
export default Nav