// Week 26 Homework
import HomeWork1 from './Week26/D1_W26_HW/HomeWork/Homework';
import HomeWork2 from './Week26/D2_W26_HW/HomeWork/HomeWork';
import HomeWork3 from './Week26/D3_W26_HW/Homework/Homework';
import HomeWork4 from './Week26/D3_W26_HW/Homework/Homework';

//  Week 27 Homework
import HomeWork2_1 from './Week27/D1_W27_HW/Homework/Homework';
import HomeWork2_2 from './Week27/D2_W27_HW/Homework/Homework';
import HomeWork2_3 from './Week27/D3_W27_HW/Homework/Homework';

//  Week 28 Homework
//  Router
import Homework3_1 from './Week28/D2_W28_HW/Homework/Homework';
//  Router chilldren
import HW3_1Child1 from './Week28/D3_W28_HW/Homework/Pages/Home';
import HW3_1Child2 from './Week28/D2_W28_HW/Homework/Pages/Profile';
import HW3_1Child3 from './Week28/D2_W28_HW/Homework/Pages/Projects';
import HW3_1Child4 from './Week28/D2_W28_HW/Homework/Pages/About';

//  
import Homework3_2 from './Week28/D3_W28_HW/Homework/Homework';

import HW3_2Child1 from './Week28/D3_W28_HW/Homework/Pages/Home';
import HW3_2Child2 from './Week28/D3_W28_HW/Homework/Pages/Projects';
import HW3_2Child3 from './Week28/D3_W28_HW/Homework/Pages/ProjectDetail';
import HW3_2Child4 from './Week28/D3_W28_HW/Homework/Pages/About';


import Homework3_3 from './Week28/D4_W28_HW/Homework/Homework';

import HW3_3Child1 from './Week28/D4_W28_HW/Homework/Pages/Home';
import HW3_3Child2 from './Week28/D4_W28_HW/Homework/Pages/Login';
import HW3_3Child3 from './Week28/D4_W28_HW/Homework/Pages/Register';

import Homework4_1 from './Week29/D1_W29_HW/Homework/Homework';

import Homework4_2 from "./Week29/D2_W29_Hw/Homework/Homework";

import HW4_2Child1 from './Week29/D2_W29_Hw/Homework/Pages/Register';
import HW4_2Child2 from './Week29/D2_W29_Hw/Homework/Pages/Login';

import Homework4_4 from './Week29/D4_W29_HW/Homework/Homework';
import HW4_4Child1 from './Week29/D4_W29_HW/Homework/Pages/Detail';

import Homework5_1 from './Week30/D1_W30_HW/Homework/Homework';

import Homework6_1 from './Week31/D1_W31_HW/Homework/Homework';

import Homework6_2 from './Week31/D2_W31_HW/Homework/Homework';

import Homework6_3 from './Week31/D3_W31_HW/Homework/Homework';

import Homework6_4 from './Week31/D4_W31_HW/Homework/Homework';

import Homework7_1 from './Week32/D4_W32_HW/Homework/Homework';

const routes = [
    {
        week: 26,
        homework: [
            {
                id: 1,
                name: 'React & JSX',
                path: '/HW1',
                component: HomeWork1
            }, {
                id: 2,
                name: 'Components & Props',
                path: '/HW2',
                component: HomeWork2
            }, {
                id: 3,
                name: 'Eventhandle & User Interaction',
                path: '/HW3',
                component: HomeWork3
            }, {
                id: 4,
                name: 'Mini-Project:Static Blog Page',
                path: '/HW4',
                component: HomeWork4
            }
        ]
    },
    {
        week: 27,
        homework: [
            {
                id: 5,
                name: 'State with useState',
                path: '/HW5',
                component: HomeWork2_1
            }, {
                id: 6,
                name: 'Delete Tasks & Filter Tasks',
                path: '/HW6',
                component: HomeWork2_2
            }, {
                id: 7,
                name: 'Persist Tasks with Local storage',
                path: '/HW7',
                component: HomeWork2_3
            }
        ]
    }, {
        week: 28,
        homework: [
            {
                id: 8,
                name: 'React Router',
                path: '/HW8',
                component: Homework3_1,
                chilldren: [
                    { id: 8001, path: '/HW8/home', component: HW3_1Child1 },
                    { id: 8002, path: '/HW8/Profile', component: HW3_1Child2 },
                    { id: 8003, path: '/HW8/project', component: HW3_1Child3 },
                    { id: 8003, path: '/HW8/about', component: HW3_1Child4 },
                ]
            },
            {
                id: 9,
                name: 'Dynamic Routing',
                path: '/HW9',
                component: Homework3_2,
                chilldren: [
                    { id: 9001, path: '/HW9/home', component: HW3_2Child1 },
                    { id: 9002, path: '/HW9/project', component: HW3_2Child2 },
                    { id: 9003, path: '/HW9/project/:id', component: HW3_2Child3 },
                    { id: 9004, path: '/HW9/about', component: HW3_2Child4 },
                ]
            }, {
                id: 10,
                name: 'Nested, Protected Route',
                path: '/HW10',
                component: Homework3_3,
                chilldren: [
                    { id: 10001, path: '/HW10/home', component: HW3_3Child1 },
                    { id: 10002, path: '/HW10/login', component: HW3_3Child2 },
                    { id: 10003, path: '/HW10/register', component: HW3_3Child3 },
                ]
            }
        ]
    }, {
        week: 29,
        homework: [
            {
                id: 11,
                name: 'Authentication',
                path: '/HW11',
                component: Homework4_1,
                chilldren: []
            }, {
                id: 12,
                name: 'Axios Register Page',
                path: '/HW12',
                component: Homework4_2,
                chilldren: [
                    { id: 12001, path: '/HW12/register', component: HW4_2Child1 },
                    { id: 12002, path: '/HW12/login', component: HW4_2Child2 }
                ]
            },{
                id:13,
                name:'Movie Search App',
                path:'/HW13',
                component:Homework4_4,
                chilldren:[
                    {id:13001,path:'/HW13/Details/:id',component:HW4_4Child1}
                ]
            }
        ]
    },{
        week:30,
        homework:[
            {
                id:14,
                name:'Global useContext',
                path:'/HW14',
                component:Homework5_1
            }
        ]
    },{
        week:31,
        homework:[
            {
                id:15,
                name:'Change Color with useReducer',
                path:'/HW15',
                component:Homework6_1
            },{
                id:16,
                name:'Localstorage with useReducer',
                path:'/HW16',
                component:Homework6_2
            },{
                id:17,
                name:'Use useReducer',
                path:'/HW17',
                component:Homework6_3
            },{
                id:18,
                name:'Use useReducer make Work list',
                path:'/HW18',
                component:Homework6_4
            }
        ]
    },{
        week:32,
        homework:[
            {
                id:19,
                name:'Use useReducer make Work list',
                path:'/HW19',
                component:Homework7_1
            }
        ]
    },{
        week:33,
        homework:[
            {
                id:20,
                name:'Use useReducer make Work list',
                path:'/HW20',
                component:Homework7_1
            }
        ]
    }
];

export default routes;