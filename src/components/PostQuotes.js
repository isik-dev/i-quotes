import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";

import UserHeader from "./UserHeader";

// i could make both function based component and class based component however i chose to make a class based component
// also we should notice that by convention component names are CamelCase:

class PostQuotes extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    console.log(this.props.quotes);
    return this.props.quotes.map((quote) => {
      return (
        <div className="item" key={quote.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h3>{quote.publishDate}</h3>
              <p>{quote.message}</p>
            </div>
            <div>
              <UserHeader userId={quote.owner.id} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes,
  };
};

// connect is a 'react-redux' function used to gives us an access to action creators and use them inside our components
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostQuotes);
