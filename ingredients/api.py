from rest_framework import viewsets, permissions, generics
from .models import (Diet, Type, ValidIngredients, UserIngredients,
                     RecipeIngredients)
from .serializers import DietSerializer, ValidIngredientsSerializer

from url_filter.integrations.drf import DjangoFilterBackend


class DietViewSet(viewsets.ModelViewSet):
    queryset = Diet.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = DietSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['id', 'text']


class ValidIngredientsViewSet(viewsets.ModelViewSet):
    queryset = ValidIngredients.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ValidIngredientsSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['id', 'text', 'units', 'classification', ]
