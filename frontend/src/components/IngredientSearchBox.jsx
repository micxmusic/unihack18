import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ingredients } from "../actions";
import AvailableRecipes from "./AvailableRecipes";
import {
  Jumbotron,
  Button,
  Container,
  Row,
  Col,
  Table,
  Input,
  Form,
} from "reactstrap";

class IngredientSearchBox extends Component {
  state = {
    chosenIngredients: [],
    searchQuery: "",
  };

  componentDidMount() {
    this.props.fetchIngredients("");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.props.fetchIngredients(this.state.searchQuery);
    }
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.chosenIngredients.indexOf(selected);
    if (index < 0) {
      this.state.chosenIngredients.push(selected);
    } else {
      this.state.chosenIngredients.splice(index, 1);
    }
    this.setState({ chosenIngredients: [...this.state.chosenIngredients] });
  }

  render() {
    return (
      <Container fluid>
        <Input
          placeholder="Enter an ingredient"
          value={this.state.searchQuery}
          onChange={e => this.setState({ searchQuery: e.target.value })}
        />

        <hr />
        <Row>
          <Col>
            <Table>
              <tbody>
                {this.props.ingredients.map((ingredient, id) => (
                  <tr key={`ingredient_${ingredient.id}`}>
                    <td>
                      <Button
                        color="primary"
                        onClick={() => this.onCheckboxBtnClick(ingredient.id)}
                        active={this.state.chosenIngredients.includes(
                          ingredient.id
                        )}
                      >
                        {ingredient.name}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col>
            <AvailableRecipes />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchIngredients: search => {
      dispatch(ingredients.fetchIngredients(search));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientSearchBox);
