from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Parroquia(models.Model):
    nombre = models.CharField(max_length=300)
    direccion=models.CharField(max_length=200)
    latitud=models.CharField(max_length=20)
    longitud=models.CharField(max_length=20)
    
    def __str__(self):
        return self.nombre
