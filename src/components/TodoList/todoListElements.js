import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const TodoWrap = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: black;
    color: white;
    overflow: auto;

`

export const TodoContainer = styled.div`
    width: 25%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -75%);
    padding: 15px;
    border-radius: 10px;
    background-color: none;

    @media screen and (max-Width: 450px) {
        width: 90%;
        transform: translate(-50%, -100%);
    }

    @media screen and (max-Width: 400px) {
        width: 100%;
        transform: translate(-50%, -100%);
    }
`

export const AddActionButton = styled.button`
    margin: 0 3px;
    padding: 2px;
    font-weight: bold;
    font-size: 18px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: blue;
`

export const ClearActionButton = styled.button`
    margin: 0 3px;
    padding: 2px;
    font-weight: bold;
    font-size: 18px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: red;
`

export const TodoInput = styled.input`
    margin-right: 10px;
    transform: scale(1.2);
    
`
export const TodoItemContainer = styled.div`
    color: black;
`

export const TodoAddContainer = styled.div`
    display: flex;
    height: 50px;
    justify-content: space-between;
    background-color: white;
    margin-bottom: 20px;
    padding: 5px;
    padding-left: 10px;
`

export const TodoListContainer = styled.div`
    text-align: left;
    background-color: white;
    padding: 30px;
    min-height: 300px;
`

export const TodoInputBox = styled.input`
    border-width:0px;
    border:none;
    width: 80%;
    font-size: 20px;
    font-weight: bold;
    
    &:focus {
        outline: none;
    }
`

export const TodoHr = styled.hr`
    background-color: #01bf71;
    width: 80%;
    height: 2px;
`

export const TodoH1 = styled.h1`
    text-align: center;
    color: #01bf71;
    margin-top: 0;

    @media screen and (max-Width: 350px) {
        font-size: 50px;
    }
`

export const ClearDiv = styled.div`
    display: flex;
    height: 50px;
    justify-content: space-between;
    background-color: white;
    margin-bottom: 0px;
    padding: 10px;
    color: black;
    vertical-align: middle;
`

export const CounterP = styled.p`
    height: 250px;
    margin: 5px;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
`

export const LabelStyle = styled.label`
    font-size: 18px;
    font-weight: bold;
    word-wrap: break-word;
    color: ${props => props.todo ? "red" : "black"};
    text-decoration: ${props => props.todo ? "line-through" : "none"};
`

export const HomeButton = styled(LinkR)`
    background-color: transparent;
    display: inline-block;
    border: 2px solid #01bf71;
    color: white;
    border-radius: 50%;
    font-size: 1.4rem;
    text-align: center;
    padding-top: 10px;
    margin: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    

    &:hover {
        font-size: 1.5rem;
        border: 2px solid red;
    }

    @media screen and (max-Width: 450px) {
        display: none;
    }
`

   