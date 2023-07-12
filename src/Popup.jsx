import React from 'react'
import './Popup.scss';
import { useState } from 'react';

export default function Popup({active, setActive}) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');  
    const [nameBorder, setNameBorder] = useState({borderColor: 'black'});
    const [passwordBorder, setPasswordBorder] = useState({borderColor: 'black'})

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className='modal-content' onClick={el => el.stopPropagation()}>
                <h3>Вход на сайт</h3>
                <h4 id='info1'>Имя пользователя <b>*</b></h4>
                <input id='name' style={nameBorder} onChange={(event) => {setName(event.target.value);
                    setNameBorder({borderColor: 'black'});
                }}></input>
                <h4 id='info2'>Пароль <b>*</b></h4>
                <input id='password' style={passwordBorder} onChange={(event) => {setPassword(event.target.value);
                    setPasswordBorder({borderColor: 'black'});
                }}></input>
                <button id='enter' onClick={() => {
                    if (name == '' || password == '') {
                        alert('Заполните все поля!');
                        if (name == '') {
                            setNameBorder({borderColor: 'red'});
                        };
                        if (password == '') {
                            setPasswordBorder({borderColor: 'red'})
                        }
                    } else {
                        setActive(false);
                        alert('Вы вошли в систему');
                    }
                }}>Войти</button>
            </div>
        </div>
    )
    }
