from rest_framework import serializers

from .models import (Diet, Type, ValidIngredient, UserIngredient,
                     RecipeIngredient, Recipe)


class DietSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diet
        fields = ("id", "text", "exclusion")


class ValidIngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ValidIngredient
        fields = ('id', 'name', 'units', 'classification', )


class UserIngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserIngredient
        fields = ('id', 'belongs_to', 'ingredient', 'amount', 'expiry', )


class RecipeIngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeIngredient
        fields = ('id', 'belongs_to', 'ingredient', 'amount',)


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'name', 'description', 'image',)
