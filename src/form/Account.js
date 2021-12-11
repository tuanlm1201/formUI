import React from 'react';
import LabelForm from '../component/LabelForm';

export default class Account extends React.Component {
    render() {
        return (
            <div className="account">
                <p className="account__title">
                    Account
                </p>
                <div className="account__content">
                    <LabelForm label='asdsads' />
                </div>
            </div>
        );
    }
}