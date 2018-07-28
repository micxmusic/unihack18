import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ingredients } from "../actions";
import { Jumbotron, Button, Container, Row, Table, Input } from "reactstrap";

class IngredientSearchBox extends Component {
    state = {
        chosenIngredients: [],
        searchQuery:"",
    };

    componentWillMount() {
        this.props.fetchIngredients(this.state.searchQuery);
    }
    render() {
        return (
            <Container fluid>
                <Input
                    placeholder="Enter an ingredient"
                    value={this.state.searchQuery}
                    onChange={(e) => this.setState({searchQuery:e.target.value})}
                />
                <hr />
                <Table>
                    <tbody>
                        {this.props.ingredients.map((id, ingredient) => (
                            <tr key={`ingredient_${ingredient.id}`}>
                                <td>{ingredient.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
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
        fetchNote: search => {
            dispatch(ingredients.fetchIngredients(search));
        }
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientSearchBox);
