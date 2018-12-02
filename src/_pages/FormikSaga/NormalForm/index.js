import  React from 'react';
import PropTypes from 'prop-types';


//textarea component
export class Textarea extends React.Component {

  static defaultProps = {
    value: ''
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }

  state = {
    value: this.props.value
  };

  render () {

    const handleChange = event => {
      this.setState({value: event.target.value});
    }

    return (
      <textarea id={this.props.id} 
                name={this.props.name} 
                defaultValue={this.state.value} 
                onChange={this.handleChange} />
    );
  }
}


//radio component
export class Radio extends React.Component {

  static defaultProps = {
    selected: false
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool
  }

  state = {
    selected: this.props.selected
  };

  render () {
    
    const handleChange = () => {
      this.setState({selected: !this.state.selected})
    }

    return (
      <span>
        <input type="radio"
               defaultChecked={this.state.selected} 
               onChange={this.handleChange}  
               id={this.props.id} 
               name={this.props.name} /> {this.props.label}
      </span>
    );
  }
}


//checkbox component
export class Checkbox extends React.Component {

  static defaultProps = {
    checked: false
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
  }

  state = {
    checked: this.props.checked
  };

  render () {

    const handleChange = () => {
      this.setState({checked: !this.state.checked})
    }

    return (
      <span>
        <input type="checkbox"
               defaultChecked={this.state.checked} 
               onChange={this.handleChange}  
               id={this.props.id} 
               name={this.props.name} /> {this.props.label}
      </span>
    );
  }
}

export class MyForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
   
      console.log('submitting form. We need to validate it!');
    }
    render() {
      return(
        <form action="/myform" 
              method="post" 
              onSubmit={this.handleSubmit}>
            <input type="submit" value="Submit Form" />
        </form>
      )
    }
}