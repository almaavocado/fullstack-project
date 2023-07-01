from django.contrib.auth.models import User, Group
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]


class FormSubmissionSerializer(serializers.Serializer):
    name = serializers.CharField()
    email = serializers.EmailField()
    phone_number = serializers.CharField()
    age_preference = serializers.IntegerField()
    activity_preference = serializers.CharField()
    experience_with_pets = serializers.CharField()
    other_pets = serializers.CharField()