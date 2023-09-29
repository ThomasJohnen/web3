const StatisticsLine = (props) => {


    return(
        <tr>
            <td>
                {props.text}
            </td>
            <td>
                {props.value} {props.unite}
            </td>
        </tr>
    )
  }

    export default StatisticsLine