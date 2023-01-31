import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoins from './components/TableCoins'


const App = () => {

  const [coins, setCoins] = useState([])
  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false')

    console.log(res.data)
    setCoins(res.data)
  }
  useEffect(() => {
    getData();

  }, [])
  return (<div className='container'>
    <h1>Crypto Beast</h1>
    <TableCoins coins={coins} />
  </div>
  );
}

export default App;