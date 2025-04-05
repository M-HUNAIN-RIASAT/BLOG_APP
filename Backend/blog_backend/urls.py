from django.contrib import admin
from django.urls import path, include, re_path
from blog.views import FrontendAppView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('blog.urls')),  # API endpoints under /api/
    re_path(r'^.*$', FrontendAppView.as_view()),  # Catch-all for React frontend
]