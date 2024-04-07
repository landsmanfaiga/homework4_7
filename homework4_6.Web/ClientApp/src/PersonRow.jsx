import React from 'react';


class PersonRow extends React.Component {
    getContent = () => {
        if(this.props.People.length === 0) {
            return <h2>No People Added Yet! Add Some People!</h2>
        }
        return (
            <>
            <tr>
                <th>{this.props.Person.firstname}</th>
                <th>{this.props.Person.lastname}</th>
                    <th>{this.props.Person.age}</th>
                </tr>
            </>
        );
    }
    render() {
        return this.getContent()
    }

}

export default PersonRow;