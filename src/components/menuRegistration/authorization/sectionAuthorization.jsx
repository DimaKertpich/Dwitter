import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { activeLogin } from '../../../store/jointSlice';
// import { saveUser } from '../../../store/userSlice';
import './sectionAuthorization.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';




function SectionAuthorization(){

    const dispatch = useDispatch();
    const changeLogin = () => dispatch(activeLogin(false));
    // let [sendUser, setSendUser] = useState(null);


    function postLogin() {

        fetch('http://localhost:9090/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": arrayLogin[0].value,
                                    "password": arrayLogin[1].value })
            })
            .then(response => response.json())
            .then(data => console.log(data));
    }

    let [arrayLogin, setArrayLogin] = useState([
        {
            name: 'Username',
            type: 'text',
            value: '',
            check: false,
            activated: false,
            pattern: /^[a-zA-Z]{3,30}$/,
            id: 0 
        },
        {
            name: 'Password',
            value: '',
            type: 'password',
            check: false,
            activated: false,
            pattern: /.+/,
            id: 1 
        }
    ]);

    function saveData(value ,id){
        setArrayLogin(arrayLogin.map(obj =>{

            if(obj.pattern.test(value) && obj.id === id){
                return {...obj, value: value, check: true, activated: true}
            }else if(obj.id === id){
                return {...obj, check: false, activated: true}
            }else{
                return obj;
            }
        }));
    }


    let showArrayLogin = arrayLogin.map((item) => (
        <div className="authorization__signIn-data" key={item.id}>
            <label>
                { item.name }
                { item.activated === true && 
                <span>
                    { item.check === false && <FontAwesomeIcon className="authorization__signIn-data-cross" icon={faXmark} />}
                    { item.check === true && <FontAwesomeIcon className="authorization__signIn-data-check" icon={faCheck} />}
                </span>}
             </label> 
            <input type={item.type} onChange={(e) => saveData(e.target.value ,item.id)}></input>
        </div>
    ))

    function activeBtnLogin(){
        for(let i = 0; i < arrayLogin.length; i++){
            if(arrayLogin[0].check === true && arrayLogin[1].check === true){
                return true
            }else{
                return false
            }
        }
    }

    return(
        <section className="authorization">
            <div className="authorization__signIn">
                <div className="authorization__signIn-wrapper">
                    <div className="authorization__signIn-title">
                        <h4>Login</h4>
                    </div>

                    { showArrayLogin }

                    <div className="authorization__btn">
                        <button className="authorization__btn-later" type="button" onClick={changeLogin}>Later</button>
                        <button className="authorization__btn-singIn" type="button" disabled={!activeBtnLogin()} onClick={postLogin}>Sign In</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SectionAuthorization;