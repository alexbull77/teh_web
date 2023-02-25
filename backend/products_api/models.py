from django.db import models
from blog_api.models import ImageModel


class CategoryModel(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class ProductModel(models.Model):
    title = models.CharField(max_length=200)
    quantity = models.TextField(max_length=100, default='100g')
    description = models.CharField(max_length=1000)
    price = models.DecimalField(max_digits=20,
                                decimal_places=2)
    rating = models.DecimalField(max_digits=3,
                                 decimal_places=2)
    stock = models.IntegerField()
    categories = models.ForeignKey(CategoryModel,
                                   on_delete=models.CASCADE,
                                   related_name='product')
    images = models.ForeignKey(ImageModel,
                               on_delete=models.CASCADE,
                               related_name='product')
