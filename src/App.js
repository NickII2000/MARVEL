import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import Employeeslist from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


import { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter,
        }
    }

    inc = () => {
        if (this.state.counter < 10) {
            this.setState(state => ({
                counter: state.counter + 5,
            }));
        }
    }

    dec = () => {
        if (this.state.counter > -10) {
            this.setState(state => ({
                counter: state.counter - 5,
            }));
        }
    }

    ran = () => {
        this.setState(state => ({
            counter: Math.ceil(Math.random() * 20) - 10,
        }));
    }

    res = () => {
        this.setState(state => ({
            counter: this.props.counter,
        }));
    }

    // Используйте только стрелочную форму методов
    // Почему? Подробный ответ будет в следующем уроке

    render() {
        const { counter } = this.props;
        return (
            <div class="app" id="app">
                <div class="counter">{this.state.counter}</div>
                <div class="controls">
                    <button onClick={this.inc}>INC</button>
                    <button onClick={this.dec}>DEC</button>
                    <button onClick={this.ran}>RND</button>
                    <button onClick={this.res}>RESET</button>
                </div>
            </div>
        )
    }
}
// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или 

//===============================================================
// import { Component } from 'react';

// class WhoAmI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             years: 27,
//             text: 'Нажато: ',
//         }
//     }

//     nextYear = () => {
//         console.log('+++');
//         // this.setState({
//         //     years: this.state.years + 1,
//         // });
//         this.setState(state => ({
//             years: this.state.years + 1,
//             text: this.state.text + '+ ',
//         }));
//     }

//     render() {
//         const { name, surname, link } = this.props;
//         return (
//             <div>
//                 <button onClick={this.nextYear}>{this.state.text}</button>
//                 <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
//                 <a href={link}>My profile</a>
//             </div >
//         );
//     }
// }

// function App() {
//     return (
//         <div className="app">
//             <WhoAmI name='John' surname="Smith" link="ok.ru" />
//             <WhoAmI name='Alex' surname="Shepard" link="vk.ru" />
//         </div>

//     );
// }


//===============================================================
// function App() {

//     const data = [
//         { name: "John C.", salary: 80000, increase: false, id: 1 },
//         { name: "Alex M.", salary: 100000, increase: true, id: 2 },
//         { name: "Carl W.", salary: 120000, increase: false, id: 3 }
//     ];
//     return (
//         <div className="app">
//             <AppInfo />

//             <div className="search-panel">
//                 <SearchPanel />
//                 <AppFilter />
//             </div>

//             <Employeeslist data={data} />
//             <EmployeesAddForm />
//         </div>
//     );
// }

export default App;