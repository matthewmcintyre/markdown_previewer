import React, { Component } from "react";

const Remarkable = require("remarkable");

const defaultValue =
  "# Main Header \n## sub header \n[link to my portfolio](https://matthewmcintyre.me)\n\nInline `code`\n```\nblock of code\n```\n list\n1. first\n2. second\n3. third\n\nblockquotes\n> can\n>> be\n>>> nested\n\n![react image](https://octodex.github.com/images/daftpunktocat-guy.gif)\n\n**bolded text**";

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: defaultValue
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(event) {
    this.setState({
      value: event.target.value
    });
    console.log("updated to ");
  }

  createMarkup = () => {
    let md = new Remarkable();
    return { __html: md.render(this.state.value) };
  };

  render() {
    return (
      <div className="container">
        <div>
          <textarea
            id="editor"
            defaultValue={this.state.value}
            onChange={this.updateValue}
          />
        </div>
        <div id="preview" dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    );
  }
}

export default Markdown;
