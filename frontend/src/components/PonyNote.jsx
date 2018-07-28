import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { notes } from "../actions";
import { Jumbotron } from "reactstrap";
import Reccomendations from "./Reccomendations";

class PonyNote extends Component {
  state = {
    text: "",
    updateNoteId: null,
  };

  resetForm = () => {
    this.setState({ text: "", updateNoteId: null });
  };

  selectForEdit = id => {
    let note = this.props.notes[id];
    this.setState({ text: note.text, updateNoteId: id });
  };

  submitNote = e => {
    e.preventDefault();
    if (this.state.updateNoteId === null) {
      this.props.addNote(this.state.text);
    } else {
      this.props.updateNote(this.state.updateNoteId, this.state.text);
    }
    this.resetForm();
  };

  render() {
    return (
      <React.Fragment>
        <Reccomendations />
        <Jumbotron>
          <h2>Welcome to PonyNote!</h2>
          <hr />
        </Jumbotron>
        <h3>Add new note</h3>
        <form onSubmit={this.submitNote}>
          <input
            value={this.state.text}
            placeholder="Enter note here..."
            onChange={e => this.setState({ text: e.target.value })}
            required
          />
          <input type="submit" value="Save Note" />
          <button onClick={this.resetForm}>Reset</button>
        </form>
        <h3>Notes</h3>
        <table>
          <tbody>
            {this.props.notes.map((note, id) => (
              <tr key={`note_${id}`}>
                <td>{note.text}</td>
                <td>
                  <button onClick={() => this.selectForEdit(id)}>edit</button>
                </td>
                <td>
                  <button onClick={() => this.props.deleteNote(id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: text => {
      dispatch(notes.addNote(text));
    },
    updateNote: (id, text) => {
      dispatch(notes.updateNote(id, text));
    },
    deleteNote: id => {
      dispatch(notes.deleteNote(id));
    },
  };
};

const items = [
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Name of dish 1",
    caption: "Desc 1",
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Name of dish 2",
    caption: "Desc 2",
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Name of dish 3",
    caption: "Desc 3",
  },
];

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PonyNote);
