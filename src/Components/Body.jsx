import React, {useContext, /* useState */} from 'react';
import Screen from './Screen'
import Toggler from './Toggler'
import Buttons from './Buttons'
import {ThemeContext} from '../Contexts' 

// const Screen = ({darkMode, initialVal}) => {
//     const theme = useContext(ThemeContext)
//     const color = darkMode? theme.dark : theme.light;
//     return (
//         <div className={`flex justify-end items-end flex-col w-full p-4 text-[${color.foreground}] bg-[${color.background}] transition duration-500`}>
//            {/* <div className={`text-xl w-full overflow-x-auto overflow-y-hidden h-fit py-2 text-right`}>
//                 38,000<span className={`px-1`}>x</span>349
//            </div> */}
//             <div className={`text-3xl w-full overflow-x-auto overflow-y-hidden text-right`}>
//                 {initialVal}
//             </div>
//         </div>
//     )
// }

// const Toggler = ({changeTheme}) => {
//     const [dark, setDark] = useState(false)
//     const handleButton = () => {
//         setDark(!dark)
//         changeTheme()
//     }
//     const color = useContext(ThemeContext);
//     const theme = dark? color.dark : color.light;
    
//     return (
//         <div className={`text-xl flex h-6 w-16 justify-center items-center relative text-[${theme.bgButtons}] bg-[${theme.bgButtons}] rounded-2xl transition duration-500`}>
//             <div className={`absolute transition duration-500 text-sm text-[${theme.foreground}] ${dark? 'translate-x-[40%]':'-translate-x-[40%]'}`}>{!dark? 'Dark':'Light'}</div>
//             <div className={`transition duration-500 flex w-8 h-6 scale-[70%] absolute ${dark? '-translate-x-1/2': 'translate-x-1/2'} z-10 rounded-2xl pointer bg-${theme.foreground}`} onClick={handleButton}></div>
//         </div>
//   )
// }

// const Buttons = ({darkMode, initialVal}) => {
//     const [keys, ] = useState([
//         {
//             button: 7,
//         },
//         {
//             button: 8,
//         },
//         {
//             button: 9,
//         },
//         {
//             button: 'x',
//         },
//         {
//             button: 4,
//         },
//         {
//             button: 5,
//         },
//         {
//             button: 6,
//         },
//         {
//             button: '-',
//         },
//         {
//             button: 1,
//         },
//         {
//             button: 2,
//         },
//         {
//             button: 3,
//         },
//         {
//             button: '/',
//         },
//         {
//             button: 'AC',
//         },
//         {
//             button: 0,
//         },
//         {
//             button: '.'
//         },
//         {
//             button: '+',
//         },
//         {
//             button: '=',
//         },
//     ])
//     const color = useContext(ThemeContext)
//     const theme = darkMode? color.dark: color.light;
    
//     const operator = ['x', '/', '+', '-']
//     const equal = '=';
//     const decimal = '.';
//     const ac = 'AC';
    
//     console.log(initialVal)

//     const handleButton = (e) => {
//         let value = e.target.textContent;

//         if(operator.includes(value)){
//             console.log('operator', value)
            
//         } else if(value === equal) {
//             console.log('equal', value)
//         }
//         else if(value === decimal) {
//             console.log('decimal', value)
//         }
//         else if(value === ac) {
//             console.log('ac', value)
//         } else{
//             console.log('number',value)
//             if(initialVal === 0){
//                 console.log('yes zero')
//                 initialVal += value;
//             }
//         }
//     }

//     return (
//         <div className={`grid grid-cols-4 gap-4 w-full py-4`}>
//             {keys.map(key=>(
//                 <button className={`bg-[${theme.background}] text-[${theme.foreground}] rounded-2xl m-1 transition duration-500`} onClick={handleButton} key={key.button}>{key.button}</button>
//             ))}
//         </div>
//     );
// }

const Body = ({darkMode, changeTheme}) => {
    const color = useContext(ThemeContext);
    const theme = darkMode? color.dark: color.light;
    
    return(
        <main className={`flex h-[80vh]`}>
            <div className={`flex flex-col w-[90vw] sm:w-[400px] bg-black text-[${theme.foreground}] rounded-2xl transition duration-500`}>
                <div className={`flex justify-center items-center h-[5vh]`}>
                    <Toggler darkMode={darkMode} changeTheme={changeTheme} />
                </div>
                <div className={`flex h-[25vh] bg-[${theme.background}] transition duration-500 text-[${theme.foreground}]`}>
                    <Screen darkMode={darkMode} />
                </div>
                <div className={`flex h-[50vh] md:h-[50vh] rounded-2xl transition duration-500 text-white bg-[#222222] p-4`}>
                    <Buttons darkMode={darkMode} />
                </div>
            </div>
        </main>
    )
}
export default Body