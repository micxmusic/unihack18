from rest_framework import viewsets, permissions, generics
from .models import (Diet, Type, ValidIngredient, UserIngredient,
                     RecipeIngredient, Recipe)
from .serializers import (DietSerializer, ValidIngredientsSerializer,
                          UserIngredientsSerializer,
                          RecipeIngredientsSerializer,
                          RecipeSerializer)

from url_filter.integrations.drf import DjangoFilterBackend


class DietViewSet(viewsets.ModelViewSet):
    queryset = Diet.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = DietSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['id', 'text']


class ValidIngredientsViewSet(viewsets.ModelViewSet):
    queryset = ValidIngredient.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ValidIngredientsSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['id', 'name', 'units', 'classification', ]


class UserIngredientsViewSet(viewsets.ModelViewSet):
    queryset = UserIngredient.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = UserIngredientsSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['id', 'belongs_to', 'ingredient', 'amount', 'expiry', ]


class RecipeIngredientsViewSet(viewsets.ModelViewSet):
    queryset = RecipeIngredient.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = RecipeIngredientsSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['id', 'belongs_to', 'ingredient', 'amount', ]


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = RecipeSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['id', 'name', 'description', 'image', ]
