class TweetComponent extends React.Component {
    render() {
        const container = {
            background: 'white',
            padding: '10px 10px 0px 10px',
            color: 'black',
            lineHeight: '0.5',
            borderLeft: '1px solid black'
        }; 

        const styleMessage = {
            marginBottom: '20px',
            paddingBottom: '15px',
            fontWeight: 'bold',
            color: 'lightskyblue'
        };

        const dateStyle = {
            fontStyle: 'italic'
        };
        
        return (
            <div style={container}>
                <h2>Tweet Details</h2>
                <p>{this.props.username}</p>
                <p>{this.props.name}</p>
                <p style={dateStyle}>{this.props.date}</p>
                <p style={styleMessage}>{this.props.message}</p>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <TweetComponent username="timmy_id" name="Oluwatimilehin Idowu" date="10/10/2020" message="I'm glad I joined twitter" />
                <TweetComponent username="timmy_id" name="Oluwatimilehin Idowu" date="30/10/2020" message="Omo, Arsenal fall my hand big time" />
                <TweetComponent username="timmy_id" name="Oluwatimilehin Idowu" date="10/11/2020" message="It is well with Nigeria" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
