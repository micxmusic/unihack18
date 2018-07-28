import React, { Component } from "react";
import { Form } from "../../node_modules/reactstrap";

class AddRecipe extends Component {
  render() {
    return (
      <React.Fragment>
        <Form>
          <FormGroup>
            <Label for="RecipeName">Name</Label>
            <Input
              type="recipename"
              name="recipename"
              id="examplename"
              placeholder="insert your recipe name here"
            />
          </FormGroup>
          <FormGroup>
            <Label for="RecipeIngredient">Name</Label>
            <Input
              type="recipeingredient"
              name="recipeingredient"
              id="examplename"
              placeholder="enter item name"
            />
            <Label for="IngredientQuantity">Quantity</Label>
            <Input
              type="ingredientquantity"
              name="ingredientquantity"
              id="examplequantity"
              placeholder="enter amount"
            />
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}

export default AddRecipe;
