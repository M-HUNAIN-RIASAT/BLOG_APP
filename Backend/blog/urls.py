from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet, FrontendAppView

router = DefaultRouter()
router.register(r'blogs', BlogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]