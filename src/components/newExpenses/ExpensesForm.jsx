import React, { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import "./ExpensesForm.css";
import styled from "styled-components";

const ExpensesForm = ({ onClick, onSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  const [inputDate, setInputDate] = useState(null);

  //Обработчик изменения значения данных
  const getInputTextValue = (e) => {
    //Обновляем при изменении значения ввода
    setInputText(e.target.value);
  };

  const getInputNumberValue = (e) => {
    setInputNumber(e.target.value);
  };

  const getInputDateValue = (e) => {
    setInputDate(e.target.value);
  };

  const submitHandler = () => {
    const product = {
      title: inputText,
      price: inputNumber,
      date: inputDate,
    };
    onSubmit(product);

    setInputText("");
    setInputNumber("");
    setInputDate("");
  };

  return (
    <form action="">
      <Form>
        {/* Управляемый компонент с двухсторонней привязкой */}
        <Input
          type="text"
          placeholder="Заголовок"
          children="Заголовок"
          value={inputText}
          onChange={getInputTextValue}
        />
        <Input
          type="number"
          placeholder="Цена"
          children="Цена"
          value={inputNumber}
          onChange={getInputNumberValue}
        />
        <Input
          type="date"
          placeholder="Датировать"
          children="Датировать"
          value={inputDate}
          onChange={getInputDateValue}
        />
        <Btn>
          <Button onClick={onClick} marginRight="15px">
            Отмена
          </Button>
          <Button onClick={submitHandler}>Добавить расходы</Button>
        </Btn>
      </Form>
    </form>
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
