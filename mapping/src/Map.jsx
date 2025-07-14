function Map() {
    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    return (
        <>
           { 
            animals.map(animal => 
                    <ul>
                        <li>{animal}</li>
                    </ul>
                )
            }
        </>
    );
}

export default Map;
