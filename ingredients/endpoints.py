from django.conf.urls import include, url
from rest_framework import routers

from .api import (DietViewSet, ValidIngredientsViewSet,
                  UserIngredientsViewSet,
                  RecipeIngredientsViewSet,
                  RecipeViewSet)

router = routers.DefaultRouter()
router.register('Diet', DietViewSet, 'Diet')
router.register('ValidIngredient',
                ValidIngredientsViewSet, 'ValidIngredient')
router.register('Recipe', RecipeViewSet, 'Recipe')
router.register('RecipeIngredient',
                RecipeIngredientsViewSet, 'RecipeIngredient')
router.register('UserIngredient', UserIngredientsViewSet, 'UserIngredient')

urlpatterns = [
    url("^", include(router.urls)),
]
