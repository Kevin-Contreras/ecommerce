import React from 'react';
import Nav from "./nav"
class Home extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {value:'',contra:'',datos:[]};
      this.handleChanges1 = this.handleChanges1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
   componentDidMount() {
   
      fetch("/s").then((response)=>{
       return response.json();

      }).then((data)=>{
        this.setState({datos:data})
      })
    }
    handleChanges1(event) { this.setState({value: event.target.value});console.log(event)  }
    handleChange2(event) { this.setState({contra: event.target.value});console.log(event)  }

    handleSubmit(event) { 

    fetch("data",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(this.state)
        
    }).then(function(response) {
        
       
       return response.json();
       
       
      }).then((data) => console.log(data));
      event.preventDefault();
    }
  
    render() {
      return (
        
        <div>
          <div className='d'>
          <Nav/>
          </div>
        <div className='dat'>
        <form onSubmit={this.handleSubmit}>      
          <label>
            Name:
            <input type="text" value={this.state.value} name = "values" onChange={this.handleChanges1} />   
                 </label>
                 <label>
            contraseña:
            <input type="text" value={this.state.contra} name = "vv" onChange={this.handleChange2} />   
                 </label>
          <input type="submit" value="Submit" />
        </form>
        { this.state.datos.map((f)=>
          (
          <h1 key={f.dato2}>{f.dato}</h1>)
          )
          
          }

        </div>

        </div>
        
      );
    }
  }
  export default Home