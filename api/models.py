from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class UserData(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='data')
    slug = models.CharField(max_length=200, blank=True)
    detail = models.TextField(max_length=50000, blank=True)


# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
    # if created:
        # Profile.objects.create(user=instance)


# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
    # instance.profile.save()
