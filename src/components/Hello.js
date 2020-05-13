import React from 'react'
 const Hello = () =>{
    // return(
    //     <div>
    //         <h1>Hello Willybiz</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
    {id:'HelloObject',className:'Dummyclass'},
    React.createElement('h1',null,'Hello Willybiz')
    )
}
export default Hello