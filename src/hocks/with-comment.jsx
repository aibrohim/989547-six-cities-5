import React, {createRef} from "react";
import {CommentPostStatus} from "../consts";
import propTypes from "prop-types";

export const withComment = (Component) => {
  class WithComment extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        review: ``
      };
      this.buttonRef = createRef();
      this.formRef = createRef();

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleFieldsChange = this.handleFieldsChange.bind(this);
    }

    componentDidMount() {
      this.buttonRef.current.disabled = true;
    }

    handleFormSubmit(evt) {
      evt.preventDefault();
      const adaptedComment = Object.assign(
          {},
          this.state,
          {
            comment: this.state.review
          }
      );
      delete adaptedComment.review;

      this.props.postCommentAction(this.props.id, adaptedComment);

      this.buttonRef.current.disabled = true;
      this.props.changeSendStatus(CommentPostStatus.SENDING);
      this.formRef.current.reset();
      this.setState({
        rating: null,
        review: ``
      });
    }

    handleFieldsChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value
      });
    }

    componentDidUpdate() {
      if (this.state.rating === null || this.state.review.length < 50 || this.state.review.length > 300) {
        this.buttonRef.current.disabled = true;
      } else {
        this.buttonRef.current.disabled = false;
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onFieldsChange={this.handleFieldsChange}
          formRef={this.formRef}
          onFormSubmit={this.handleFormSubmit}
          buttonRef={this.buttonRef}
        />
      );
    }
  }

  WithComment.propTypes = {
    postCommentAction: propTypes.func.isRequired,
    changeSendStatus: propTypes.func,
    id: propTypes.number.isRequired
  };

  return WithComment;
};
