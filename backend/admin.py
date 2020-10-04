from django.contrib import admin
from django.http import HttpResponse
from .models import Job, JobList

admin.site.register(Job)
admin.site.register(JobList)

