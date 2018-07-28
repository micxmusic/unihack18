from rest_framework import serializers

from .models import (Diet, Type, ValidIngredients, UserIngredients,
                     RecipeIngredients)


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = ("text", )
