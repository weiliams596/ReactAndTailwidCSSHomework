// Week 26
import ClassTest1_1 from './Week26/D1_W26_HW/ClassTest/ClassTest';
import ClassTest1_2 from './Week26/D2_W26_HW/ClassTest/ClassTest';
import ClassTest1_3 from './Week26/D3_W26_HW/ClassTest/ClassTest';
import ClassTest1_4 from './Week26/D4_W26_HW/ClassTest/ClassTest';

// Week 27
import ClassTest2_1 from './Week27/D1_W27_HW/ClassTest/ClassTest';
import ClassTest2_2 from './Week27/D2_W27_HW/ClassTest/ClassTest';
import ClassTest2_3 from './Week27/D3_W27_HW/ClassTest/ClassTest';

// Week 28
// Router exercise
import ClassTest3_1 from './Week28/D2_W28_HW/ClassTest/ClassTest'
// Router chilldren
import CT3_1Child1 from './Week28/D2_W28_HW/ClassTest/Pages/Home'
import CT3_1Child2 from './Week28/D2_W28_HW/ClassTest/Pages/Contact'
import CT3_1Child3 from './Week28/D2_W28_HW/ClassTest/Pages/NotFund'

//  Dynamic Routing & URL Par ameters exercose
import ClassTest3_2 from './Week28/D3_W28_HW/ClassTest/ClassTest';

import ClassTest3_3 from './Week28/D3_W28_HW/ClassTest/ClassTest';


import ClassTest4_1 from './Week29/D1_W29_HW/ClassTest/ClassTest';

import CT4_1Child1 from './Week29/D1_W29_HW/ClassTest/Pages/LoginForm';
import CT4_1Child2 from './Week29/D1_W29_HW/ClassTest/Pages/Register';

import ClassTest4_2 from './Week29/D2_W29_Hw/ClassTest/ClassTest';

import ClassTest4_3 from './Week29/D3_W29_HW/ClassTest/ClassTest';

import ClassTest4_4 from './Week29/D4_W29_HW/ClassTest/ClassTesst';
import CT4_4Child1 from './Week29/D4_W29_HW/ClassTest/Pages/Detail';

import ClassTest5_1 from './Week30/D1_W30_HW/ClassTest/ClassTest';

import ClassTest5_2 from './Week30/D2_W30_HW/ClassTest/ClassTest';
import CT5_2Child1 from './Week30/D2_W30_HW/ClassTest/Pages/Home';

import ClassTest5_3 from './Week30/D4_W30_HW/ClassTest/ClassTest';
import CT5_3Child1 from './Week30/D4_W30_HW/ClassTest/Pages/FlightList';
import CT5_3Child2 from './Week30/D4_W30_HW/ClassTest/Pages/FlightBooking';


import ClassTest6_1 from './Week31/D1_W31_HW/ClassTest/CLassTest';

import ClassTest6_2 from './Week31/D2_W31_HW/ClassTest/ClassTest';
import CT6_2Child1 from './Week31/D2_W31_HW/ClassTest/Products';

import ClassTest6_3 from './Week31/D3_W31_HW/ClassTest/CLassTest';

import ClassTest6_4 from './Week31/D4_W31_HW/ClassTest/ClassTest';

import ClassTest7_1 from './Week32/D2_W32_HW/ClassTest/ClassTest'

import ClassTest7_2 from './Week32/D3_W32_HW/ClassTest/ClassTest';

import ClassTest8_1 from './Week33/D1_W33_HW/ClassTest/ClassTest';
import ClassTest8_2 from './Week33/D2_W33_HW/ClassTest/ClassTest';
import ClassTest8_3 from './Week33/D3_W33_HW/ClassTest/ClassTest';
import ClassTesst8_4 from './Week33/D4_W33_HW/ClassTest/ClassTest';

import ClassTest9_1 from './Week34/D2_W33_HW/ClassTest/ClassTest';

const routes = [
    {
        week: 26,
        classtest: [
            {
                id: 201,
                name: 'Make some files',
                path: '/CT1',
                component: ClassTest1_1
            }, {
                id: 202,
                name: 'Make some components',
                path: '/CT2',
                component: ClassTest1_2
            }, {
                id: 203,
                name: 'Event exercise',
                path: '/CT3',
                component: ClassTest1_3
            }, {
                id: 204,
                name: 'Blog exercise',
                path: '/CT4',
                component: ClassTest1_4
            }
        ]
    }, {
        week: 27,
        classtest: [
            {
                id: 205,
                name: 'State exercise',
                path: '/CT5',
                component: ClassTest2_1
            }, {
                id: 206,
                name: 'Delete & Filter exercise',
                path: '/CT6',
                component: ClassTest2_2
            }, {
                id: 207,
                name: 'Local Storage exercise',
                path: '/CT7',
                component: ClassTest2_3
            }
        ]
    }, {
        week: 28,
        classtest: [
            {
                id: 208,
                name: 'Router exercise',
                path: '/CT8',
                component: ClassTest3_1,
                chilldren: [
                    {
                        id: 208001,
                        name: 'Home',
                        path: '/CT8/Home',
                        component: CT3_1Child1
                    }, {
                        id: 208002,
                        name: 'Contact',
                        path: '/CT8/Contact',
                        component: CT3_1Child2
                    }, {
                        id: 208003,
                        name: 'Not Found',
                        path: '/CT8/NotFound',
                        component: CT3_1Child3
                    }
                ]
            }, {
                id: 209,
                name: 'Dynamic Routing & URL exercise',
                path: '/CT9',
                component: ClassTest3_2
            }, {
                id: 210,
                name: 'Form exercise',
                path: '/CT10',
                component: ClassTest3_3
            }
        ]
    },
    {
        week: 29,
        classtest: [
            {
                id: 211,
                name: "Form Input and Inputhandle",
                path: '/CT11',
                component: ClassTest4_1,
                chilldren: [
                    {
                        id: 211001,
                        name: "Login Page",
                        path: '/CT11/Login',
                        component: CT4_1Child1
                    },
                    {
                        id: 211002,
                        name: "Register Page",
                        path: '/CT11/Register',
                        component: CT4_1Child2
                    }
                ]
            }, {
                id: 212,
                name: "Axios exercise",
                path: '/CT12',
                component: ClassTest4_2
            }, {
                id: 213,
                name: "Axios exercise 2",
                path: '/CT13',
                component: ClassTest4_3,
            }, {
                id: 214,
                name: "Axios for IMDB Movies API exercise",
                path: '/CT14',
                component: ClassTest4_4,
                chilldren: [
                    {
                        id: 214001,
                        name: "Name details",
                        path: '/CT14/Details/:id',
                        component: CT4_4Child1
                    }
                ]
            }
        ]
    }, {
        week: 30,
        classtest: [
            {
                id: 215,
                name: "Context API exercise",
                path: '/CT15',
                component: ClassTest5_1
            }, {
                id: 216,
                name: "Context API exercise 2",
                path: '/CT16',
                component: ClassTest5_2,
                chilldren: [
                    { id: 216001, name: "Change Theme", path: "/CT16/home", component: CT5_2Child1 }
                ]
            }, {
                id: 217,
                name: "Context API exercise 3",
                path: '/CT17',
                component: ClassTest5_3,
                chilldren: [
                    { id: 217001, name: "Flight List", path: "/CT17/flights", component: CT5_3Child1 },
                    { id: 217002, name: "Flight Booking", path: "/CT17/booking/:id", component: CT5_3Child2 }
                ]
            }
        ]
    }, {
        week: 31,
        classtest: [
            {
                id: 218,
                name: "useReducer exercise",
                path: '/CT18',
                component: ClassTest6_1
            }, {
                id: 219,
                name: "useReducer exercise 2",
                path: '/CT19',
                component: CT6_2Child1,
                // chilldren: [
                //     { id: 219001, name: "Product list", path: "/CT19/product", component: CT6_2Child1 }
                // ]
            },{
                id: 220,
                name: "useReducer exercise 3",
                path: '/CT20',
                component: ClassTest6_3
            },{
                id: 221,
                name: "useReducer exercise 4",
                path: '/CT21',
                component: ClassTest6_4
            }
        ]
    },{
        week: 32,
        classtest: [
            {
                id: 222,
                name: "Custom hook exercise",
                path: '/CT22',
                component: ClassTest7_1
            },{
                id: 223,
                name: "Custom hook exercise 2",
                path: '/CT23',
                component: ClassTest7_2
            }
        ]
    },{
        week: 33,
        classtest: [
            {
                id: 224,
                name: "Tailwind exercise",
                path: '/CT24',
                component: ClassTest8_1
            },{
                id: 225,
                name: "Tailwind exercise 2",
                path: '/CT25',
                component: ClassTest8_2
            },{
                id: 226,
                path: '/CT26',
                name: "Gemini AI exercise",
                component: ClassTest8_3
            },{
                id: 227,
                path: '/CT27',
                name: "Gemini AI exercise 2",
                component: ClassTesst8_4
            }
        ]
    },{
        week: 34,
        classtest: [
            {
                id: 228,
                name: "React-Bootstrap exercise",
                path: '/CT28',
                component: ClassTest9_1
            }
        ]
    }
];

export default routes;