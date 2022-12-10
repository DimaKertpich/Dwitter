import './App.scss';
import SectionContent from './components/content/sectionContent.jsx';
import SectionAuth from './components/menuRegistration/authorization/sectionAuthorization.jsx';
import SectionRegistr from './components/menuRegistration/registration/sectionRegistration.jsx';
import { useSelector } from 'react-redux';
import 'normalize-css';


function App(){
    
   
    let login = useSelector( state => state.joint.controlLogin);
    let registr = useSelector( state => state.joint.controlRegistr);
    
    return(
        <div className='App'>
            <SectionContent></SectionContent>
            { login === true && <SectionAuth></SectionAuth>}
            { registr === true && <SectionRegistr></SectionRegistr>}
        </div>
    )


}

export default App;