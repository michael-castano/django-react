from graphene_django.types import DjangoObjectType
from assessment.jobs.models import Job, JobList

class JobType(DjangoObjectType):
    class Meta:
        model = Job
        only_fields = (
            'id',
            'title',
        )
        use_connection = True

class JobListType(DjangoObjectType):
    class Meta:
        model = JobList
        only_fields = (
            'id',
            'title',
            'members',
        )
        use_connection = True