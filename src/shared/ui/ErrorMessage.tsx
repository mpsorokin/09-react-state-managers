import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
    return <div style={{ color: 'red' }}>Error: {message}</div>;
};

export default ErrorMessage;