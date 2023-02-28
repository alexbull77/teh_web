from rest_framework import viewsets
from .models import PostModel
from .serializers import PostDetailSerializer, PostListSerializer


class PostView(viewsets.ModelViewSet):
    # serializer_class = PostDetailSerializer
    queryset = PostModel.postobjects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return PostListSerializer
        if self.action == 'retrieve':
            return PostDetailSerializer
        return PostListSerializer
