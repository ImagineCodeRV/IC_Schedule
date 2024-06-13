from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=100)
    phones = models.JSONField()  # JSON field to store multiple phone numbers
    address = models.CharField(max_length=255)
    category = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    status = models.CharField(max_length=50, default='active')
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
