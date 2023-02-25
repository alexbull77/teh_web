from rest_framework import serializers
from .models import PostModel, ImageModel


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageModel
        fields = ('alt_name', 'url')


class PostSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)

    class Meta:
        model = PostModel
        fields = ('id', 'title', 'short_description',
                  'body', 'images')
