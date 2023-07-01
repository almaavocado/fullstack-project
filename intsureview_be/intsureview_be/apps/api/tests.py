from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from django.http import HttpResponseNotAllowed


class FormSubmissionTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_interest_form_submission_success(self):
        form_data = {
            'name': 'Alma A',
            'email': 'almaa@example.com',
            'phoneNumber': '1234567890',
            'agePreference': 'Senior',
            'activityPreference': 'Calm',
            'experienceWithPets': 'Yes',
            'otherPets': 'Yes',
        }
        response = self.client.post(reverse('form_submission'), form_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json(), {'status': 'success', 'message': 'Interest form submitted successfully.'})

    def test_form_submission_missing_data(self):
        form_data = {
            'name': 'Alma A',
            'email': 'almaa@example.com',
            'phoneNumber': '1234567890',
            'agePreference': 'Young',
            'activityPreference': 'Active',
            'experienceWithPets': 'Yes',
        }
        response = self.client.get(reverse('form_submission'), form_data, format='json')
        self.assertEqual(response.status_code, HttpResponseNotAllowed.status_code)
