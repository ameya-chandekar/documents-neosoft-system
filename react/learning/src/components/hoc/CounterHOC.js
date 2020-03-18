import React from 'react'

const UpdatedComponent = OriginalComponent=>{
    
    class Newcomponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        increamentcount=()=>{
            this.setState(prestate=>{
                return {count:prestate.count+1}
            }
    
            )
        }
        
        render() {
            return (
                <div>
                    <OriginalComponent count={this.state.count} increamentcount={this.increamentcount}/>
                </div>
            )
        }
    }
    return Newcomponent
    }
export default UpdatedComponent  