# blog/admin.py
from django.contrib import admin
from .models import Blog

admin.site.register(Blog)  # Register the Blog model in the admin interface
