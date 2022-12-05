import SectionContent from './components/content/sectionContent.js';
import SectionAuth from './components/registration/authorization/sectionAuthorization.js';
import 'normalize-css';

function App(){

    return(
        <div className='App'>
            <SectionContent></SectionContent>
            <SectionAuth></SectionAuth>
        </div>
    )


}

export default App;