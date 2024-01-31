import React from "react";
import "./ExpensesCard.css";
import Button from "../UI/Button";
import styled from "styled-components";

const ExpensesCard = ({ el, onDelete }) => {
  return (
    <Card>
      {/* <h2 className="date">{el.date}</h2> */}
      <Title>{el.title}</Title>
      <Item>
        <Price>{el.price}</Price>
      </Item>
      <Button onClick={() => onDelete(el.id)}>Delete</Button>
    </Card>
  );
};

export default ExpensesCard;

const Card = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 1fr;
  background: #4b4b4b;
  gap: 1rem;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  color: #fff;
`;

const Price = styled.span`
  color: #fff;
  border: 1px solid #fff;
  padding: 1rem;
  background-color: #40005d;
  border-radius: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
