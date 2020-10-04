# from graphene import Argument, Field, ID, ObjectType, Schema
# from graphene_django import DjangoConnectionField, DjangoObjectType
# from assessment.jobs.models import Job, JobList

# from graphene_django.filter import DjangoFilterConnectionField

# class JobType(DjangoObjectType):
#     class Meta:
#         model = Job
#         fields = (
#             'id',
#             'title',
#         )
#         use_connection = True
    
#     def resolve_id(self, info):
#         return self.id
    
#     def resolve_title(self, info):
#         return self.title

# class JobListType(DjangoObjectType):
#     class Meta:
#         model = JobList
#         fields = (
#             'id',
#             'title',
#             'members',
#         )
#         use_connection = True
    
#     def resolve_id(self, info):
#         return self.id
    
#     def resolve_title(self, info):
#         return self.title
    
    

# class Query(ObjectType):
#     joblists = DjangoConnectionField(JobListType)
#     joblist = Field(JobListType, id=Argument(ID, required=True))

#     jobs = DjangoConnectionField(JobType)
#     job = Field(JobType, id=Argument(ID, required=True))

#     def resolve_jobs(root, info, **kwargs):
#         return Job.objects.all()
    
#     def resolve_job(root, info, **kwargs):
#         return Job.objects.get(id=kwargs.get('id'))
    
#     def resolve_joblists(root, info, **kwargs):
#         return JobList.objects.all()
    
#     def resolve_joblist(root, info, **kwargs):
#         return JobList.objects.get(id=kwargs.get('id'))
        

# schema = Schema(query=Query)