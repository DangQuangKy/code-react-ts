import { ReactNode, FC } from 'react';
import './GlobalStyles.scss';


const GlobalStyles:FC<{ children: ReactNode }> = ({ children}) => {
    return children;
}

export default GlobalStyles;