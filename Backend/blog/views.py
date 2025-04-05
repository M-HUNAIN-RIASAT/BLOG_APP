from rest_framework import viewsets
from .models import Blog
from .serializers import BlogSerializer
from django.views.generic import TemplateView

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class FrontendAppView(TemplateView):
    template_name = 'index.html'