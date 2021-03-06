import { Component } from "react";
import propTypes from 'prop-types';

export default class Modal extends Component {
    static propTypes = {
        onClose: propTypes.func,
        url: propTypes.string
    }

    

    componentDidMount() {
        window.addEventListener('keydown', this.handleCloseModal)
        document.addEventListener('click', this.handleCloseModal)

    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseModal)
        document.removeEventListener('click', this.handleCloseModal)  
    }

    handleCloseModal = (e) => {
        if (e.code === 'Escape' || e.target.className === 'Overlay') {
            this.props.onClose();
            
            }
    }

    render() {
        return (
        <>
            <div className="Overlay">
                <div className="Modal">
                    <img src={this.props.url} alt=""/>
                </div>
            </div>
        </>
    )
    }
    
}