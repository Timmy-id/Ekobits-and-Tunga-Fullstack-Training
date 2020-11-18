class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>My very first component.</h1>
            </div>
        );
    }
}

class SecondComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>My second component.</h2>
            </div>
        );
    }
}

class NamedComponent extends React.Component {
    render() {
        return (
            <div>
                <p>My name is {this.props.name}</p>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        //var name = this.props.name;
        return (
            <div>
                <h1>My first React App!</h1>
                <FirstComponent />
                <SecondComponent />
                <NamedComponent name="Oluwatimilehin" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
