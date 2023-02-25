from django.contrib import admin
from .models import ProductModel, CategoryModel

admin.site.register(CategoryModel)


@admin.register(ProductModel)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'rating', 'stock')
