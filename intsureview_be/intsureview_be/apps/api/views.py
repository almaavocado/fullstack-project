from django.contrib.auth.models import User, Group
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from rest_framework import viewsets
from rest_framework import permissions
from intsureview_be.apps.api.serializers import UserSerializer, GroupSerializer


@csrf_exempt
@require_http_methods(['POST'])
def interest_form_submission(request):
    if request.method == 'POST':
        # Retrieve form data from the request
        name = request.POST.get('name')
        email = request.POST.get('email')
        phoneNumber = request.POST.get('phoneNumber')
        agePreference = request.POST.get('agePreference')
        activityPreference = request.POST.get('activityPreference')
        experienceWithPets = request.POST.get('experienceWithPets')
        otherPets = request.POST.get('otherPets')
        
        return JsonResponse({'status': 'success', 'message': 'Interest form submitted successfully.'})
    
    # Return an error response for unsupported methods
    return JsonResponse({'status': 'error', 'message': 'Method not allowed.'}, status=405)




class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """

    queryset = User.objects.all().order_by("-date_joined")
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

