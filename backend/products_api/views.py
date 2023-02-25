from rest_framework import viewsets
from .serializers import PostSerializer
from .models import ProductModel


class ProductView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = ProductModel.objects.all()
