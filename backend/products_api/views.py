from rest_framework import viewsets
from .serializers import ProductListSerializer, ProductDetailSerializer
from .models import ProductModel


class ProductView(viewsets.ModelViewSet):
    # serializer_class = ProductListSerializer
    queryset = ProductModel.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        if self.action == 'retrieve':
            return ProductDetailSerializer
        return ProductListSerializer
