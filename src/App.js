import { useDispatch, useSelector } from "react-redux";


function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  console.log(cash)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload:cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload:cash})
  }

  return (
    <div className="App">
      <div style={{display:"flex"}}>
        <div style={{fontSize:"20px"}}>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}> Пополнить</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять</button>
      </div>

    </div>
  );
}

export default App;
