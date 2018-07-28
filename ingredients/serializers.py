from rest_framework import serializers

from .models import (Diet, Type, ValidIngredients, UserIngredients,
                     RecipeIngredients)


class DietSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diet
        fields = ("id", "text", "exclusion")

class ValidIngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ValidIngredients
        fields = ('id', 'text', 'units', 'classification', )