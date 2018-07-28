from django.conf.urls import include, url
from rest_framework import routers

from .api import DietViewSet, ValidIngredientsViewSet

router = routers.DefaultRouter()
router.register('Diet', DietViewSet, 'Diet')
router.register('ValidIngredients',
                ValidIngredientsViewSet, 'ValidIngredients')

urlpatterns = [
    url("^", include(router.urls)),
]
