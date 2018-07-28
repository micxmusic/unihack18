from django.conf.urls import include, url
from rest_framework import routers

from .api import TypeViewSet

router = routers.DefaultRouter()
router.register('Type', TypeViewSet, 'Type')

urlpatterns = [
    url("^", include(router.urls)),
]
