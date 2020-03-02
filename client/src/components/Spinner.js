import React from "react";
import Loader from 'react-loader-spinner';
import colors from '../styles/colors';
import { SpinnerWrap } from "./SpinnerStyle";


function Spinner(){
    return(
        <SpinnerWrap>
            <Loader type="Oval" color={colors.primary} height={50} width={50} />
        </SpinnerWrap>
    )
}

export default Spinner;