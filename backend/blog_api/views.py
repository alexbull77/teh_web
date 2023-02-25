from rest_framework import viewsets
from .serializers import PostSerializer
from .models import PostModel


class PostView(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = PostModel.objects.all()
