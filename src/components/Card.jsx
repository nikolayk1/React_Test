import * as React from "react";


class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
        <div className="card">
            <img
                className="img-responsive img-rounded"
                alt="Card image cap"
                src={profile.avatar_url}
                style={{maxHeight: 250, maxWidth: 250}}/>
            <div className="card-body">
                <div className="card-title">{profile.name}</div>
                <div className="card-text">{profile.company}</div>
            </div>
        </div>
    );
  }
}

export default Card;