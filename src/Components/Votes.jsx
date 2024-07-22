const Votes= (props)=>{
    var selector = `${props.keySelector}-${props.sportId}`;
    let votes = localStorage.getItem(selector);
    let currentVotes = votes==null? 0 :votes;
    return <span id={`${props.keySelector}-${props.sportId}`}>{currentVotes}</span>
}
export default Votes;