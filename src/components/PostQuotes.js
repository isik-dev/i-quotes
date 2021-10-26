import React from "react";
import { connect } from "react-redux";
import { fetchQuotes } from "../actions";

// i could make both function based component and class based component however i chose to make a class based component
// also we should notice that by convention component names are CamelCase:

class PostQuotes extends React.Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    return <div>Post Quotes from here</div>;
  }
}

// connect is a 'react-redux' function used to gives us an access to action creators and use them inside our components
export default connect(null, { fetchQuotes })(PostQuotes);
