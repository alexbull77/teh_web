from rest_framework import serializers
from django.conf import settings
from .models import PostModel, ImageModel, TagModel
from users.models import NewUser
# from django.contrib.auth.models import User


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageModel
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('id', 'email', 'user_name')


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = TagModel
        fields = '__all__'


class PostDetailSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)
    tags = TagSerializer(many=True)
    author = UserSerializer(many=False)

    class Meta:
        model = PostModel
        fields = '__all__'


class PostListSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)

    class Meta:
        model = PostModel
        fields = ('id', 'title', 'images', 'short_description')
