from rest_framework import viewsets, permissions, generics      
from .models import (Diet, Type, ValidIngredients, UserIngredi ents,
                     RecipeIngredients)
from .serializers import TypeSerializer

from url_filter.integrations.drf import DjangoFilterBackend


class TypeViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = TypeSerializer
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['text']
 