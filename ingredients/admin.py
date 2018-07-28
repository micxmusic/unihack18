from django.contrib import admin
from .models import (Diet, Type, ValidIngredient, UserIngredient, Recipe,
                     RecipeIngredient)

# Register your models here.
admin.site.register(Diet)
admin.site.register(Type)
admin.site.register(ValidIngredient)
admin.site.register(UserIngredient)
admin.site.register(Recipe)
admin.site.register(RecipeIngredient)
