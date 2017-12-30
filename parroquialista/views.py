from django.shortcuts import render
from django.http import Http404
from django.http import HttpResponse

from .models import Parroquia

import json
from django.core.serializers.json import DjangoJSONEncoder




def index(request): 
    lista_parroquia= Parroquia.objects.all()
    js_lista_parroquia=list(lista_parroquia.values('nombre','latitud','longitud'))
    js_lista_parroquia= json.dumps(js_lista_parroquia)
    
    context = {'lista_parroquia': lista_parroquia,
        'my_obj':js_lista_parroquia
    }
    
    return render(request,'parroquialista/index.html',context)

def detail(request,parroquia_id):
    try:
       parroquia=Parroquia.objects.get(pk=parroquia_id)
    except Parroquia.DoesNotExist:
        raise Http404("Parroquia No Existe")
    return render(request,'parroquialista/detail.html',{'parroquia': parroquia})