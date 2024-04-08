import React from 'react';
import PersonRow from './PersonRow';
import PersonForm from './PersonForm';



class PeopleTable extends React.Component {
    state = {
        People: [],
        currentPerson: {
            firstname: '',
            lastname: '',
            age: ''
        }

    }

    onTextboxChange = e => {
        if (e.target.id == "first-name") {
            this.setState({ currentPerson: { ...this.state.currentPerson, firstname: e.target.value } });
        }
        else if (e.target.id == "last-name") {
            this.setState({ currentPerson: { ...this.state.currentPerson, lastname: e.target.value } });
        }
        else if(e.target.id == "age") {
            this.setState({ currentPerson: { ...this.state.currentPerson, age: e.target.value } });
        }
    }
    
    onClearClick = () => {
        this.setState({ currentPerson: '', People: [] });
    }
    
    onAddClick = () => {
        const copy = [...this.state.People];
        copy.push(this.state.currentPerson);
        this.setState({ People: copy, currentPerson: '' })
    }

    render() {
        return ( 
            <div>
                <PersonForm currentPerson={this.state.currentPerson}
                    onTextboxChange={this.onTextboxChange}
                    onClearClick={this.onClearClick}
                    onAddClick={this.onAddClick} />

           <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.People.map(person => <PersonRow Person={person}
                            People={this.state.People}></PersonRow>)}
                </tbody>
            </table>
            </div>

        )
    }

}

export default PeopleTable;