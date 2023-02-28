from rest_framework import serializers
from .models import ProductModel, ImageModel, CategoryModel


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageModel
        fields = ('alt_name', 'url')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryModel
        fields = ('name', )


class ProductDetailSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=False)
    categories = CategorySerializer(many=False)

    class Meta:
        model = ProductModel
        fields = '__all__'


class ProductListSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=False)

    class Meta:
        model = ProductModel
        fields = ('id', 'title', 'images', 'price', 'quantity')
