import { useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/newExpenses/NewExpenses";
import styled from "styled-components";

const productData = [
  {
    title: 'Alma',
    price: '120',
    date: new Date (2021, 5,12),
    id: '1'
  },
  {
    title: 'Car',
    price: '2000000',
    date: new Date (2022, 5,12),
    id: '2'
  },
  {
    title: 'Flower',
    price: '500',
    date: new Date (2023, 5,12),
    id: '3'
  }
]


function App() {

  const [newProduct, setNewProduct] = useState(productData)

  const addNewExpenseshandler = (data) => {
    setNewProduct([...newProduct, data])
  }

  const deleteExpense = (id) => {
    const newData = newProduct.filter((el) => el.id !== id)
    setNewProduct(newData)
  }

  return (
    <Main>
      <NewExpenses onSubmit={addNewExpenseshandler}/>
      <Expenses onDelete={deleteExpense} data={newProduct}/>
    </Main>
  );
}

export default App;


const Main = styled.div `
background-color:gray;
width: 100%;
height: 900px;
`