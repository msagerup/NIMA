import React, { Component } from 'react'


const AppContextData = React.createContext();

 class ContextDataProvider extends Component {
    state = {
        menuOpen: false,
    }
    render() {
        return (
            <AppContextData.Provider value={{
                ...this.state,
                toggleMenu: () => {
                    this.setState({
                        menuOpen: !this.state.menuOpen
                    })
                }
            }}>
                {this.props.children}
            </AppContextData.Provider>
        )
    }
}

export {
    ContextDataProvider,
    AppContextData
}