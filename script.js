class App extends React.Component {
    state = {
        name: 'Efaayin',
        age: 23
    }
    render() {
        return (
        <div className="app-content">
            <header className="app-content__header">
                <div className="logo" >
                    <h2>The Workshop</h2>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            
            <main className="app-content__main">
                <div className="app-content__main--one">
                    <h1>Welcome to the workshop</h1>
                    <p>Your best choice for everything car repairs</p>
                </div>

                <div className="app-content__main--two">
                    <img src="images/img-1.jpg" alt="image one" className="img-one" />
                    <img src="images/img-2.jpg" alt="image two" className="img-two" />
                    <img src="images/img-3.jpg" alt="image three" className="img-three" />
                </div>
            </main>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));











/*

<h1>Hey, ninjas</h1>
            <p>
                My name is: { this.state.name } and I am { this.state.age }
            </p>

*/