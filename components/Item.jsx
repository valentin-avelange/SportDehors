//create a react component

var React = require('react');

import styles from './Item.module.css';

/**
 * Props
 * disabled : boolean
 * image
 * name
 */
export default class Item extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            disabled: props.disabled
        };
    }

    toggleDisable() {
        console.log(this.state)
        this.setState({disabled : !this.state.disabled})
    }

    render() {

        return (
            <div onClick={() => this.toggleDisable()}
            className={styles.jaj}>
                {this.props.name}
                <img src={this.props.image} style={{width:"70px", height:"70px", filter: this.state.disabled ? "grayscale(1)" : undefined}}></img>
            </div>
        );
    }




}