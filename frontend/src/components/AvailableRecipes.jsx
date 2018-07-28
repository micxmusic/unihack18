import React, { Component } from "react";
import { connect } from "react-redux";
import { recipes } from "../actions";
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

class AvailableRecipes extends Component {
  componentDidMount() {
    this.props.fetchRecipes([]);
  }
  componentDidUpdate(prevProps, prevState) {
    let prevIngredients = prevProps.ingredients;
    let currIngredients = this.props.ingredients;
    // if (prevIngredients.length === currIngredients.length) {
    //   for (let i = 0; i < prevIngredients.length; i++) {
    //     if (prevIngredients[i] !== currIngredients[i]) {
    //       console.log("updated");
    //       this.props.fetchRecipes(currIngredients);
    //       return;
    //     }
    //   }
    // } else {
      
    //   console.log("updated");
    this.props.fetchRecipes(currIngredients);
    // }
  }

  render() {
    // console.log(this.props.ingredients);
    return (
      <Table>
        <tbody>
          {this.props.recipes.map((recipe, id) => (
            <tr key={`recipe_${recipe.id}`}>
              <td>{recipe.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecipes: ingredients => {
      dispatch(recipes.fetchRecipes(ingredients));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableRecipes);
