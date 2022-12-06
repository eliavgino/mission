import React, { Component } from 'react';

class Todolist extends Component {
    state={
        todo:[],
        flage:'',
        stylebig:{width: '500px',
                height: '500px',
                boxShadow:' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
            },
            stylelist:
            {
                width: '400px',
                height: '300px',
                boxShadow:' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)'
            }

    }
    render() {
        return (
            
            <React.Fragment >
                <div style={this.state.stylebig} className="position-absolute top-50 start-50 translate-middle">
              {/* <button class="btn btn-outline-secondary" type="button" id="button-addon1" onClick={this.addtolistbtn}>Button</button> */}
              <h1 className="shadow-lg p-3 mb-5 bg-body rounded " >Just do what you need to do!!</h1>
              <input onKeyPress={(ev)=>this.addtolist(ev)} tycdpe="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" id="myinpit"/>
              <div style={this.state.stylelist} className="overflow-auto ms-5 mt-1">
                {this.state.todo.map((value)=>
                <p  > 
                <input className="form-check-input " type="checkbox"
                 value="" id="flexCheckDefault" onChange={(e)=>this.bedisabled(e)}/>
                 {value}</p>
                 )}
              </div>
              </div>
            </React.Fragment>
        );
    }
    bedisabled(e)
    {
        console.log(e.target.parentNode.style.textDecoration = 'line-through');
         if (e.target.checked)
         {
           this.setState({flage:'text-decoration-line-through'})
            e.target.disabled=true;
         }
    }

    // addtolistbtn=()=>
    // {
    //     if(document.getElementById('myinpit').value)
    //     {
    //         this.setState({todo:[...this.state.todo,(document.getElementById('myunpit').value)]})
    //         document.getElementById('myunpit').value=null;
    //     }
    // }

    addtolist(ev)
    {
        if (ev.key=="Enter")
        {
            this.state.todo.push(ev.target.value)
            this.setState({todo:this.state.todo})
            ev.target.value='';
        }
    }
}

export default Todolist;
