import './App.scss';
import logo from './img/logo.svg';
import news1 from './img/news1.svg';
import news2 from './img/news2.svg';
import news3 from './img/news3.svg';
import lab1 from './img/lab1.jpg';
import lab2 from './img/lab2.jpg';
import commercy from './img/commercy.svg';
import Modal from './Popup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
        <header>
          <img src={logo} alt="logo-IPU-RAN" />
          <div className='header-sections'>
            <Link className='link' to="">Информация</Link>
            <Link className='link' to="">Публикации</Link>
            <Link id='no-border' className='link' to="">Контакты</Link>
            <button id='wrap' onClick={() => {setModalActive(true)}}><b>Вход</b></button> 
          </div>
        </header>
        <div className='line'></div>
        <main>
          <h3>Последние новости</h3>
          <div className='news1'>
            <img src={news1} alt="" />
            <div className='info1'>
              <a href=""><b>Молодые ученые в науке об управлении</b></a>
              <p>Итоги Всероссийского конкурса научных работ молодых ученых по теории управления и ее приложениям 2023 года</p>
              <p><b>7 июля 2023</b></p>
            </div>
          </div>
          <div className='news2'>
            <div className='info2'>
              <a href=""><b>Поездка Старица-Ржев, организованная Профсоюзом ИПУ</b></a>
              <p>Состоялась поездка по местам боевой славы Великой Отечественной войны</p>
              <p><b>3 июля 2023</b></p>
            </div>
            <img src={news2} alt="" />
          </div>
          <div className='news3'>
              <img src={news3} alt="" />
              <div className='info3'>
                <a href=""><b>Медицина + математика = общественное здоровье</b></a>
                <p>Как формируется здоровье населения, если на долю врачей приходится лишь 10% влияния?</p>
                <p><b>7 июля 2023</b></p>
              </div>
          </div>
          <a id='show-all-news' href=""><b>Смотреть остальные</b></a>
          <h3>Лаборатории Института</h3>
          <div className='lab1'>
            <h4><a href="">Лаборатория № 1</a></h4>
            <h4>«Динамических информационно-управляющих систем им. Б. Н. Петрова»</h4>
            <div className='lab1-info'>
              <img src={lab1} alt="lab1-img" />
              <ul>
                <li>Каршаков Е. В.</li>
                <li>доктор технических наук</li>
                <li>Телефон: <b>+7 495 198-17-20, доб. 1353</b></li>
                <li>Внутренний телефон: 1353</li>
                <li>E-mail: <b>karshakov@ipu.ru</b></li>
                <li>ведущий научный сотрудник</li>
              </ul>
            </div>
          </div>
          <div className='line'></div>
          <div className='lab2'>
            <h4><a href="">Лаборатория № 2</a></h4>
            <h4>«Технических средств управления»</h4>
            <div className='lab2-info'>
              <img src={lab2} alt="lab2-img" />
              <ul>
                <li>Балабанов А. В.</li>
                <li>доктор технических наук</li>
                <li>Телефон: <b>+7 495 198-17-20, доб. 1311</b></li>
                <li>Внутренний телефон: 1311</li>
                <li>E-mail: <b>balabanov@ipu.ru</b></li>
                <li>ведущий научный сотрудник</li>
              </ul>
            </div>
          </div>
          <a id='show-all-lab' href=""><b>Смотреть все лаборатории</b></a>
          <h3>Дополнительно</h3>
          <img id='commercy' src={commercy} alt="commercy" />
        </main>
        <Modal active={modalActive} setActive={setModalActive} />
        <footer>
          <div className='additional-sections'>
            <label><b>Доп. разделы :</b></label>
            <ul>
              <li><a href="">Научная жизнь</a></li>
              <li><a href="">Научная инфраструктура</a></li>
              <li><a href="">Конференции, семинары</a></li>
              <li><a href="">Научные издания</a></li>
            </ul>
          </div>
          <div className='footer-information'>
            <label><b>Обязательная информация :</b></label>
            <ul>
              <li><a href="">Госзакупки</a></li>
              <li><a href="">Охрана труда</a></li>
              <li><a href="">Противодействие терроризму</a></li>
            </ul>
          </div>
          <div className='institute'>
            <p><b>ИПУ РАН</b></p>
            <p><b>Институт проблем управления</b></p>
            <p><b>Российской Академии Наук</b></p>
          </div>
        </footer>
      </div>
  );
}

export default App;
