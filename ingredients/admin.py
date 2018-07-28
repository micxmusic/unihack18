from django.contrib import admin
from .models import (Diet, Type, ValidIngredients, UserIngredients,
                     RecipeIngredients)

# Register your models here.
admin.site.register(Diet)
admin.site.register(Type)
admin.site.register(ValidIngredients)
admin.site.register(UserIngredients)
admin.site.register(RecipeIngredients)
