import React from "react";
import ExpensesCard from "./ExpensesCard";
import './Expenses.css'
import styled from "styled-components";

const Expenses = (props) => {
  const {data} = props
  return (
  <>
    <DIV>
      {data.map((el) => {
        return <ExpensesCard el={el} key={el.id} onDelete={props.onDelete}/>;
      })}
      {props.children}
    </DIV>
  </>
  );
};

export default Expenses;

const DIV = styled.div`
    background: #1f1f1f;
    margin: 2rem auto;
    width: 48rem;
    padding: 1rem;
    border-radius: 10px;
`