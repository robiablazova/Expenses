import React from "react";
import ExpensesForm from "./ExpensesForm";
import Button from "../UI/Button";
import { useState } from "react";
import './NewExpenses.css'
import styled from "styled-components";

const NewExpenses = ({onSubmit}) => {
  const [state, setState] = useState(false);

  function openAndCloseExpensesFormHandler() {
    setState((prev) => !prev);
  }



  return (
    <DIV
    >
      {state ? (
        <ExpensesForm onSubmit={onSubmit} onClick={openAndCloseExpensesFormHandler} />
      ) : (
        <Button onClick={openAndCloseExpensesFormHandler}>
          Добавить новый расход
        </Button>
      )}

    </DIV>
  );
};

export default NewExpenses;

const DIV = styled.div`
  background-color: #ad9be9;
  padding: 1rem;
  margin: 2rem auto;
  width: 48rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`