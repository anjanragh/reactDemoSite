import React from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        redirect: false
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        setTimeout(() => this.setState({ redirect: true }), 5000);
        console.error("Error boundary caught an error", error, info)
    }


    render() {
        console.log("This is the state : ", this.state)
        if (this.state.redirect) {
            return (<Redirect to="/" />)
        }
        if (this.state.hasError) {
            return (
                <h1>There was an error with this listing. <Link to="/">Click here</Link> to go back to home page. Or wait five seconds.</h1>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary;