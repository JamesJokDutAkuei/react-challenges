export default function Display({ jokes }){
    return ( 
      <>
      {jokes.map(joke => (
        <div key={joke.id}>
          <div className='innerbox'>
            <h3 className='tex'>{ joke.setup }</h3>
            <p className='tex'>{ joke.punchline }</p>
          </div>
        </div>
      ))}  
      </>
    )
  };