from django.db import migrations
from django.contrib.auth import get_user_model


def create_users(apps, schema_editor):
    User = get_user_model()
    User.objects.create_superuser(username='adm' , password='Admiragl29')
    User.objects.create_user(username='seva'     , password='seva'    , first_name='Сева')
    User.objects.create_user(username='egor'     , password='egor'     , first_name='Егор')
    User.objects.create_user(username='vara'     , password='vara'  , first_name='Варя')
    User.objects.create_user(username='klim'     , password='klim'  , first_name='Клим')
    User.objects.create_user(username='alena'    , password='alena'       , first_name='Alena')
    User.objects.create_user(username='anna'     , password='anna'     , first_name='Аня')

class Migration(migrations.Migration):
    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.RunPython(create_users)
    ]
