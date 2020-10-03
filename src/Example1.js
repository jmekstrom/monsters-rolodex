import React from 'react';


class Example1 extends React.Component{
    constructor(){
        super();
        this.state = {
            monsters: [
                { name: "Zombie" },
                { name: "Jason X" }
            ]
        }
        console.log(this.state);
    }

    render(){
        return (this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>))
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                this.setState({monsters:users})
            })
    }
}

export default Example1
