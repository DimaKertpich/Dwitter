import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { activeRegistr } from '../../../store/jointSlice';
import './sectionRegistration.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

function Registration(){
    
    const dispatch = useDispatch();
    const changeRegistr = () => dispatch(activeRegistr(false))

    function postRegist(){ 

        fetch('http://localhost:9090/api/auth/regist',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": arrayRegistr[0].value,
                "email": arrayRegistr[1].value,
                "password": arrayRegistr[2].value
            })
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
        
    }

    let [arrayRegistr, setArrayRegistr] = useState([
        {
            name: 'Username',
            value: '',
            type: 'text',
            check: false,
            activated: false,
            pattern: /^[a-zA-Z]{3,30}$/,
            id: 0
        },
        {
            name: 'Email',
            value: '',
            type: 'mail',
            check: false,
            activated: false,
            pattern: /^[a-z,A-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            id: 1
        },
        {
            name: 'Password',
            value: '',
            type: 'password',
            check: false,
            activated: false,
            pattern: /.+/,
            id: 2
        },
        {
            name: 'Repeat the password',
            value: '',
            type: 'password',
            check: false,
            activated: false,
            pattern: /.+/,
            id: 3
        }
    ]);

    function sendRegistr(value, id){

        setArrayRegistr(arrayRegistr.map(obj =>{

            if(obj.pattern.test(value) && obj.id === id){
                return {...obj, value: value, check: true, activated: true}
            }else if(obj.id === id){
                return {...obj, check: false, activated: true};
            }else{
                return obj;
            }
        }))
    }

    let showRegistr = arrayRegistr.map((item) =>(
        <div key={item.id} className="registration__signUp-data">
            <label>{ item.name }
            {item.activated === true && 
            <span>
                { item.check === false && <FontAwesomeIcon className="registration__signUp-data-cross" icon={faXmark} />}
                { item.check === true &&<FontAwesomeIcon className="registration__signUp-data-check" icon={faCheck} />}
            </span>}
            
            
            </label>
            <input type={item.type} onChange={(e) => sendRegistr(e.target.value, item.id)}></input>
        </div>
    ))

    function activeRegist(){

        for(let i = 0; i < arrayRegistr.length; i++){
            if(arrayRegistr[0].check === true && arrayRegistr[1].check === true && arrayRegistr[2].check === true && arrayRegistr[3].check === true){
                return true
            }else{
                return false
            }
        }

    }

    console.log(activeRegist())

    return(
        <section className="registration">
            <div className="registration__signUp">
                <div className="registration__signUp-wrapper">
                    <div className="registration__signUp-title">
                        <h4>Registration</h4>
                    </div>

                    { showRegistr }

                    <div className="registration__btn">
                        <button className="registration__btn-later" type="button" onClick={changeRegistr}>Later</button>
                        <button className="registration__btn-singUp" type="button" disabled={!activeRegist()} onClick={postRegist} >Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registration;