import React, { Component } from 'react'


const AppContextData = React.createContext();

 class ContextDataProvider extends Component {
    state = {
        menuOpen: false,
        contactDrawerOpen: false,
        contactPerson: '',
        listingDrawerOpen: false,
    }
    render() {
        return (
            <AppContextData.Provider value={{
                ...this.state,
                toggleMenu: () => {
                    this.setState({
                        menuOpen: !this.state.menuOpen
                    })
                },
                toggleContactDrawer: (bool, person) => {
                    this.setState({
                        contactDrawerOpen: bool,
                        contactPerson: person
                    })
                },
                toggleListingDrawer: (bool) => {
                    this.setState({
                        listingDrawerOpen: bool
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