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


class PostSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)
    categories = CategorySerializer(many=True)

    class Meta:
        model = ProductModel
        fields = '__all__'
