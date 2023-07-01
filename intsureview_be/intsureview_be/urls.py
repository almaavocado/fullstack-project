from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from intsureview_be.apps.api import views

router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet, basename="user")
router.register(r"groups", views.GroupViewSet, basename="group")
#router.register(r"form-submission", views.FormSubmissionViewSet, basename="form-submission")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    path('api/submit-interest-form/', views.interest_form_submission, name='form_submission'),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
]
