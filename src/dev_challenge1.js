const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'grey',
        color: 'blue'
    }
};

export default function TodoList() {
    return (
        <>
            {/* <div> is it working now ??</div> */}
            <div style={person.theme}>
                <h1>{person.name}'s Todos</h1>
                <img
                    className="avatar"
                    src="https://i.imgur.com/7vQD0fPs.jpg"
                    alt="Gregorio Y. Zara"
                />
                <ul>
                    <li>Improve the videophone</li>
                    <li>Prepare aeronautics lectures</li>
                    <li>Work on the alcohol-fuelled engine</li>
                </ul>
            </div>
        </>
        
    );
}
