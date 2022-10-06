import React, {useContext} from 'react';
// import {ThemeContext} from '../Contexts';
import { CalcContext } from '../Contexts/CalcContext';

const Screen = () => {
    // const theme = useContext(ThemeContext)
    // const color = darkMode? theme.dark : theme.light;
    
    const {calc} = useContext(CalcContext);
    return (
        <div className={`flex justify-end items-end flex-col w-full p-4 text-white bg-black transition duration-500`}>
           <div className={`text-xl w-full overflow-x-auto overflow-y-hidden h-fit py-2 text-right`}>
           {calc.num2 && calc.num2 !==0 ? calc.num2: ''} <span className={`px-1`}>{calc.displaySign && calc.displaySign}</span>
           </div>
            <div className={`text-3xl w-full overflow-x-auto overflow-y-hidden text-right`}>
             {calc.num ? calc.num : calc.res}
            </div>
        </div>
    )
}
export default Screen