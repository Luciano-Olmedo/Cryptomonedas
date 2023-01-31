import CoinRow from "./CoinRow";
const titles = ["#","coin","price","price change", "24h volume"]

const TableCoins = ({ coins }) => {
   
    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                   {
                    titles.map(title =>(
                        <td>{title}</td>
                    ))
                   }
                </tr>
            </thead>
            <tbody>
                {
                    coins.map((coin,index) => (
                        <CoinRow key={index} coin={coin}  index={index + 1}/>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableCoins;