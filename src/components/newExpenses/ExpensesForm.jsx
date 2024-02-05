import React, { useRef } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "./ExpensesForm.css";
import styled from "styled-components";

const ExpensesForm = ({ onClick, onSubmit }) => {

  const textRef = useRef();
  const numberRef = useRef();
  const dateRef = useRef();

  const addExpense = () => {
    const text = textRef.current.value;
    const number = numberRef.current.value;
    const date = dateRef.current.value;

    const product = { text, number, date };
    onSubmit(product);

    textRef.current.value = "";
    numberRef.current.value = "";
    dateRef.current.value = "";
  };

  return (
    <>
      <form action="">
        <Form>
          <Input
            type="text"
            placeholder="Заголовок"
            children="Заголовок"
            ref={textRef}
          />
          <Input
            type="number"
            placeholder="Цена"
            children="Цена"
            ref={numberRef}
          />
          <Input
            type="date"
            placeholder="Датировать"
            children="Датировать"
            ref={dateRef}
          />
          <Btn>
            <Button onClick={onClick} marginRight="15px">
              Отмена
            </Button>
            <Button onClick={addExpense}>Добавить расходы</Button>
          </Btn>
        </Form>
      </form>
    </>
  );
};

export default ExpensesForm;

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
