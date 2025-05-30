from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from blog.views import BlogViewSet, FrontendAppView

router = DefaultRouter()
router.register(r'blogs', BlogViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', FrontendAppView.as_view(), name='home'),
]