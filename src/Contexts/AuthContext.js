import React, { Component, createContext, useContext } from "react";

export const AuthContext = createContext();
class AuthContextProvider extends Component {
    state = { 
        isAuthenticated: false
     } 
     toggleAuth = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated })
     }
    render() { 
        return (
            <AuthContextProvider.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContextProvider.Provider>
        );
    }
}
 
export default AuthContextProvider;