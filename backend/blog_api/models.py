from django.db import models
from django.contrib.auth.models import User


class TagModel(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ImageModel(models.Model):
    url = models.CharField(max_length=200)
    alt_name = models.CharField(max_length=200)

    def __str__(self):
        return self.alt_name


class PostModel(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    title = models.CharField(max_length=200)
    author = models.ForeignKey(User,
                               on_delete=models.CASCADE,
                               related_name='post')
    short_description = models.TextField(max_length=400,
                                         null=True,
                                         blank=True)
    body = models.TextField(max_length=10_000)
    tags = models.ManyToManyField(TagModel,
                                  related_name='post')
    images = models.ManyToManyField(ImageModel,
                                    related_name='post')
    status = models.CharField(
        max_length=10, choices=options, default='published'
    )
    objects = models.Manager()
    postobjects = PostObjects()

    def __str__(self) -> str:
        return self.title
