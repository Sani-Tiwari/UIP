from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User



class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # Add any additional fields you want for the user profile

from django.db import models
from django.contrib.auth.models import User

class MyImage(models.Model):
    #image = models.ImageField(upload_to='images/')
    image_file = models.ImageField(upload_to='images', default='')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.image_file.name
    # other fields
#class Video(models.Model):
#    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
#    video_file = models.FileField(upload_to='videos/')
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Video(models.Model):
    video_file = models.FileField(upload_to='videos/')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.video_file.name
class Reels(models.Model):
    video_file = models.FileField(upload_to='Reels/')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.video_file.name

