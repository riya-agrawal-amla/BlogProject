import React from "react";
// import './Card.css'; // Assuming you have a separate CSS file for Card styling

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.img} alt={this.props.title} />
                <div className="card-body">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.description}</p>
                    <h5>{this.props.author}</h5>
                </div>
            </div>
        );
    }
}

export default Card;
