# Generated by Django 4.2.7 on 2023-11-24 16:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('college', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='roll_number',
            field=models.CharField(editable=False, max_length=20, unique=True),
        ),
    ]
