import React from 'react';

class PersonForm extends React.Component {
    
    render() {
        console.log(this.props);
        return (
               <div className='row'>
         <div className='col-md-6 offset-md-2'>
             <input type='text'
                 id='first-name'
                 value={this.props.currentPerson.firstname||''}
                 onChange={this.props.onTextboxChange}
                 className='form-control'
                 placeholder='First Name' />
         </div>
         <div className='col-md-6 offset-md-2'>
             <input type='text'
                 id='last-name'
                 value={this.props.currentPerson.lastname||''}
                 onChange={this.props.onTextboxChange}
                 className='form-control'
                 placeholder='Last Name' />
         </div>
         <div className='col-md-6 offset-md-2'>
             <input type='text'
                 id='age'
                 value={this.props.currentPerson.age||''}
                 onChange={this.props.onTextboxChange}
                 className='form-control'
                 placeholder='Age' />
         </div>
         <div className='col-md-1'>
             <button className='btn btn-dark w-100' onClick={this.props.onAddClick}>Add</button>
         </div>
         <div className='col-md-1'>
             <button className='btn btn-warning w-100' onClick={this.props.onClearClick}>Clear</button>
         </div>
     </div>

        )
    }

}

export default PersonForm;