import { Component } from "react";

class ClassReact extends Component {
    // constructor(props) {
    //     super(props);
    // }
    state = { myNumber:10 }
    
    increase = () =>{
        console.log(this.state.myNumber)
        this.setState({myNumber:this.state.myNumber+=1})
    }

    componentDidMount = () =>{
        console.log("Component don mount")
    }

    // componentDidUpdate = () =>{
    //     console.log("Component has updated")
    // }

    componentWillUnmount = () =>{
        console.log("component don unmount")
    }


    render() { 
        // console.log(this.props)
        return ( 
            <>
               {/* <h1>{this.props.title}</h1>  */}
               <h1>This is a new text</h1>
               <h1>{this.state.myNumber}</h1>
               <button onClick={this.increase}>Increase Number</button>

               {/* <table className="table table-bordered table-stripped my-5">
                <tr>
                    <td>S/N</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                </tr>
                <tr>
                    <td>1.</td>
                    <td>Sojuade</td>
                    <td>20</td>
                    <td>MALE</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>Martha</td>
                    <td>12</td>
                    <td>FEMALE</td>
                </tr>
               </table> */}
            </>
         );
    }
}
 
export default ClassReact;





// import React, { useState } from 'react'

// const ClassReact = (props) => {
//     const [number, setnumber] = useState(0)

//     const increase = ()=>{
//         setnumber(number+1)
//     }
//   return (
//     <>
//     <h1>{props.title}</h1>
//     <h1>{number}</h1>
//     <button onClick={increase}>Increase Number</button>
//     </>
//   )
// }

// export default ClassReact
