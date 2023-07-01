from django.db import models

class FormSubmission(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    age_preference = models.CharField(max_length=100)
    activity_preference = models.CharField(max_length=255)
    experience_with_pets = models.BooleanField()
    other_pets = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
