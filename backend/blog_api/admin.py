from django.contrib import admin
from .models import TagModel, PostModel, ImageModel

admin.site.register(TagModel)
admin.site.register(ImageModel)


@admin.register(PostModel)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'short_description')
