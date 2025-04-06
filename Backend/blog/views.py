from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import Blog
from .serializers import BlogSerializer
from django.views.generic import TemplateView

class BlogViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Blog.objects.all().order_by('-created_at')

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class FrontendAppView(TemplateView):
    template_name = 'index.html'