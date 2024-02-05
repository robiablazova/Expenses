import { useState } from "react";
import React from "react";
import "./ExpensesCard.css";
import Button from "../UI/Button";
import styled from "styled-components";
import Modal from "../UI/Modal";

const ExpensesCard = ({ el, onDelete }) => {

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const deleteButton = () => {
    onDelete(el.id)
    closeModal()
  }
  return (
 <>
    <Card>
      {/* <h2 className="date">{el.date}</h2> */}
      <Title>{el.title}</Title>
      <Item>
        <Price>{el.price}</Price>
      </Item>
      <Button onClick={openModal}>Delete</Button>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2>DeleteExpense</h2>
        <p>Are you sure you want to delete?</p>
        <button onClick={deleteButton}>yes</button>
        <button onClick={closeModal}>no</button>
      </Modal>
    </Card>
 </>
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
//onClick={() => onDelete(el.id)}