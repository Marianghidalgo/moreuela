import React from 'react';

class RegistrationBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showRegisters: false,
      registers: [
        {id: 1, name: "Marian González ", subname: "Monday and Friday"},
        {id: 2, name: "Irati Martin", subname: "Monday and Friday"},
        {id: 3, name: "Paule Martin", subname: "Monday and Thuesday"}
      ]
    };

  }

  render () {
      const registers= this._getRegisters();
      let registersNodes;
      let buttonText = 'Show Registers';
      
      if (this.state.showRegisters) {
        buttonText = 'Hide Registers';
        registersNodes = <div className="comment-list">{registers}</div>;
      }

      return(
          <div className="comment-box">
            <h2>Register in Our Courses</h2>
            <RegisterForm addRegister={this._addRegister.bind(this)}/>
            <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
              {buttonText}
            </button>
            <h3>Registers</h3>
            <h4 className="comment-count">
              {this._getRegistersTitle(registers.length)}
            </h4>
            {registersNodes}
          </div>  
        );
      } // end render

      _addRegister(name, subname) {
          const register = {
            id: this.state.registers.length + 1,
            name,
            subname
          };
          this.setState({ registers: this.state.registers.concat([register]) }); 
        }
        
        _handleClick() {
          this.setState({
            showRegisters: !this.state.showRegisters
          });
        }
        
        _getRegisters() {    
          return this.state.registers.map((register) => { 
            return (
              <Register
                name={register.name} 
                subname={register.subname} 
                key={register.id} />
            ); 
          });
        }
        
        _getRegistersTitle(registerCount) {
          if (registerCount === 0) {
            return 'No registers yet';
          } else if (registerCount === 1) {
            return "1 register";
          } else {
            return `${registerCount} registers`;
          }
        }
      } // end CommentBox component
  
      
      class RegisterForm extends React.Component {
          render() {
            return (
              <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <div className="comment-form-fields">
                  <input placeholder="Name and Subname" required ref={(input) => this._name = input}></input><br />
                  <textarea placeholder="Choose your days" rows="4" required ref={(textarea) => this._subname = textarea}></textarea>
                </div>
                <div className="comment-form-actions">
                  <button type="submit">New Registers</button>
                </div>
              </form>
            );
          } // end render
          
          _handleSubmit(event) { 
            event.preventDefault();   // prevents page from reloading on submit
            let name = this._name;
            let subname = this._subname;
            this.props.addRegister(name.value, subname.value);
          }
        } // end RegisterForm component
        
        class Register extends React.Component {
          render () {
            return(
              <div className="comment">
                <p className="comment-header">{this.props.name}</p>
                <p className="comment-body">- {this.props.subname}</p>
                <div className="comment-footer">
                  <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete Register</a>
                </div>
              </div> 
            );
          }
          _deleteComment() {
            alert("-- DELETE Comment Functionality COMMING SOON...");
          }
       }
        

export default RegistrationBox      