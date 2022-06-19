import React from 'react';

const primaryButton = ({children}) => {
    return (
        <div>
            <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary">{children}</button>
        </div>
    );
};

export default primaryButton;