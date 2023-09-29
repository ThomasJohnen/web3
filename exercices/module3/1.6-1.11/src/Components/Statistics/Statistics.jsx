import StatisticsLine from "../StatisticLine/StatisticLine";


const statistics = (props) => {

    const { good, neutral, bad, all, average, positive } = props;

    return (
        <div>
            <h1>Statistics</h1>
            <table>
                <tbody>
                    <StatisticsLine text="good" value={good} />
                    <StatisticsLine text="neutral" value={neutral} />
                    <StatisticsLine text="bad" value={bad} />
                    <StatisticsLine text="all" value={all} />
                    <StatisticsLine text="average" value={average} />
                    <StatisticsLine text="positive" value={positive} unite="%" />
                </tbody>
            </table>
        
        </div>
    )

    
    }
         
    export default statistics