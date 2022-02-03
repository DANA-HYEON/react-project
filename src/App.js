import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
import { configure } from "@testing-library/react";


function App() {
  
  const [loading, setLoading] = useState(true); //로딩을 위한 변수
  const [coins, setCoins] = useState([]); //코인 배열 받아오는 변수
  const [investment, setInvestment] = useState(0); //투자금 받는 변수
  const [coinIndex, setCoinIndex] = useState("first"); //선택된 코인의 (배열 index)

  const [clickedCoinPrice, setClickedCoinPrice] = useState(0); //선택된 코인 금액

  //한번만 실행
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((responseJson) => {
          setCoins(responseJson?.slice(0,20)); //받아온 코인 setCoins 정보를 배열에 저장
          setLoading(false); //로딩문구 지우기
        });
      }, []);

  //투자금 입력받기
  const onChange = (event) => {
    setInvestment(event.target.value);
  }

  //코인인덱스 체크
  const onChangeCoin =  (event) => {
    setCoinIndex(event.target.value);
    setClickedCoinPrice(coins[event.target.value].quotes.USD.price);
     //코인 배열 인덱스 저장
  }
  

  // const onChangeCoin = async (event) => {
  //   await setCoinIndex(parseInt(event.target.value)); //코인 배열 인덱스 저장
  //   console.log(parseInt(event.target.value));
  //   await sample(parseInt(event.target.value))
  // }

  // const sample = async (index) => {
  //   await setClickedCoinPrice(coins[index].quotes.USD.price);
  // }


  return(
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}

      {/* 투자금 입력받기 */}
      <input type="number" onChange={onChange} placeholder="please input your investment"/>USD
      <hr/>

      {/* 코인종류 선택 */}
      <select value={coinIndex} onChange={onChangeCoin}>
        <option value="first">please choose your coinType</option>
        {coins.map((coin, index) => (
          <option key={coin.id} value={index}>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
          </option>
        ))}
      </select>
      <hr/>

       {/* 이걸 좀 더 깔끔하게 만들 순 없을까..? */}

       
       {coins[coinIndex] ? <h1>You can buy ({Math.floor(investment / clickedCoinPrice)})unit for ({ coins[coinIndex].name})</h1> : null}
       {/* undefined == false */}
    </div>
  );
}

export default App;
