import data from '../sport-poll.json'
import Category from './Category.jsx'
import Votes from './Votes.jsx'

let sportGroupList = data.filter(sport => sport.sport== Category);

const vote=(id, key)=>{
    let selector =`${key}-${id}`;
    let ele =  document.getElementById(selector);
    let currentVote = parseInt(ele.innerHTML);
    currentVote++;
    ele.innerHTML = currentVote;
    localStorage.setItem(selector, currentVote);
}


const SportsPoll =()=>{
    return (
        <div className="mt-5 container">
            <h1>Sports poll <span className={`cat_${Category}`}>({Category})</span> </h1> 
             
            <table className="mt-5 table table-striped">
            <thead>
                    <tr>
                        <th>Awayname</th>
                        <th>Homename</th>
                        <th>Country</th>
                        <th>Group</th>
                        <th>State</th>
                        <th> Vote</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        sportGroupList.map(sport=>
                        (
                            <tr key={sport.id}>
                                <td>{sport.awayName}</td>
                                <td>{sport.homeName}</td>
                                <td>{sport.country}</td>
                                <td>{sport.group}</td>
                                <td className={`state_${sport.state}`}>{sport.state}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                                        <button onClick={()=> vote(sport.id, "awayTeam")} type="button" className="btn btn-outline-primary">Away team win: <Votes keySelector="awayTeam" sportId={sport.id}/></button>
                                        <button onClick={()=> vote(sport.id, "draw")} type="button" className="btn btn-outline-primary">Draw: <Votes keySelector="draw" sportId={sport.id}/></button>
                                        <button onClick={()=> vote(sport.id, "homeTeam")} type="button" className="btn btn-outline-primary">Home team win: <Votes keySelector="homeTeam" sportId={sport.id}/></button>
                                    </div>
                                </td>
                            </tr> 
                        ))
                    }
                </tbody>
            </table>

               
        </div>

    )
}
export default SportsPoll