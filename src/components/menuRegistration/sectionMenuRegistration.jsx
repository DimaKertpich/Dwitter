import './sectionMenuRegistration.scss';
import search from '../../assets/image/search/search.png';
import { useDispatch } from 'react-redux';
import { activeLogin, activeRegistr } from '../../store/jointSlice';

function SectionRegistration(){

    const dispatch = useDispatch();
    const changeLogin = () => dispatch(activeLogin(true));
    const changeRegistr = () => dispatch(activeRegistr(true));

    return(
        <section className="menuRegistration">
            <div className="menuRegistration__wrapper">
                <div className="menuRegistration__data">
                    <div className="menuRegistration__data-user">
                        <h4>User Name</h4>
                        <p>your dwitt</p>
                    </div>
                    <div className="menuRegistration__data-auth">
                        <button className="menuRegistration__data-auth-login" type="button" onClick={changeLogin}>Login</button>
                        <button className="menuRegistration__data-auth-registr" type="button" onClick={changeRegistr}>Registration</button>
                    </div>
                </div>
            </div>
            <div className="menuRegistration__wrapper-search">
                <div className="menuRegistration__search">
                    <input type="email" placeholder="Search"></input>
                    <img src={search} alt="search"></img>
                </div>
            </div>
        </section>
    )
}

export default SectionRegistration;