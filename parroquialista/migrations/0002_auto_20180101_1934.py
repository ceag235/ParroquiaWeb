# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2018-01-01 19:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parroquialista', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='parroquia',
            name='nombre',
            field=models.CharField(max_length=300),
        ),
    ]
