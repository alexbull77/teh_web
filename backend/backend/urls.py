from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from products_api.views import ProductView
from blog_api.views import PostView
from rest_framework_simplejwt import views as jwt_views


router = routers.DefaultRouter()
router.register(r'post', PostView, 'post-list')
router.register(r'product', ProductView, 'product-list')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/user/', include('users.urls')),
    path('api-auth/', include('rest_framework.urls')),
    # paths for tokens
    path('api/token/', jwt_views.TokenObtainPairView.as_view(),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(),
         name='token_refresh'),
]
