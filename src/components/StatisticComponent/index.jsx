import "./styles.css"

export const StatisticComponent = () =>{
    return(
        <div className="statisticSection">
            <div className="statisticContainer">
                <div className="statistic">
                    <h1>$2000m+</h1>
                    <p>Market Capitalization</p>
                </div>
                <span className="gradientLine"></span>
                <div className="statistic"> 
                    <h1>40% - 50%</h1>
                    <p>Bitcoin Market Dominance</p>
                </div>
                <span className="gradientLine"></span>
                <div className="statistic">
                    <h1>100m+</h1>
                    <p>User Worldwide</p>
                </div>
                <span className="gradientLine"></span>
                <div className="statistic">
                    <h1>10,000</h1>
                    <p>Different Cryptocurrencies</p>
                </div>
            </div>
        </div>
    )
}