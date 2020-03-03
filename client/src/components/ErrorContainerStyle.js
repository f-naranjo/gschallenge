import styled from 'styled-components';
import colors from '../styles/colors';

export const ErrorContainer = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
    margin-top:7rem;
    h2{
        padding:4rem;
        font-size:2rem;
        text-align:center;
        line-height:2.5rem;
    }
    a{
        padding:0.5rem 1rem;
        border:2px solid ${colors.primary};
        background-color: ${colors.primary};
        color:${colors.white};
        font-size:1.2rem;
        text-decoration:none;
        :hover{
            border:2px solid ${colors.primary};
            background-color: ${colors.white};
            color:${colors.primary};
            transition:0.3s;
        }
    }
`