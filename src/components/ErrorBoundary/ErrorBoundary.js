import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, message: '' };
    }

    static getDerivedStateFromError(err) {
        return { hasError: true, message: err.message };
    }
    render() {
        if (this.state.hasError)
            return (
                <>
                    <h1>:( An Error Has Occurred</h1>
                    <p>{this.state.message}</p>
                </>
            );
        return this.props.children;
    }
}

export default ErrorBoundary;
