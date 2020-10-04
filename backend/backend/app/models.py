from django.db import models
from django.utils.translation import ugettext_lazy as _
import django_filters
from django_filters import FilterSet

class Example(models.Model):
    example = models.TextField()

    def __str__(self):
        return self.example

class Job(models.Model):
    title = models.CharField(max_length=100)

    class Meta:
        verbose_name = _('job')
        ordering = ['title']

    def get_absolute_url(self):
        return reverse('model-detail-view', args=[str(self.id)])
    
    def __str__(self):
        return self.title

class JobList(models.Model):
    title = models.CharField(max_length=100)
    members = models.ManyToManyField(Job)

    class Meta:
        ordering = ['title']

    def get_absolute_url(self):
        return reverse('model-detail-view', args=[str(self.id)])
    
    def __str__(self):
        return self.title
    

