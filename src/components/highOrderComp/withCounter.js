
import React from 'react'

//this is basic higher order component
//wrappedComponent is a component
//incrementNumber is 
const withCounter = (WrappedComponent, incrementNumber) => {
    return class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState ((prevState) => {
                return {
                    count: prevState.count+incrementNumber
                }
            })
        }
        render () {
            return (
                <WrappedComponent 
                count={this.state.count} 
                incrementCount={this.incrementCount} 
                //rest other props can be passed like this
                {...this.props}/>

            )
        }
    }
}

export default withCounter