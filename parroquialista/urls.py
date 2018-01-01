from django.conf.urls import url

from . import views

app_name='parroquialista'

urlpatterns = [
    # ex: /lista/
    url(r'^$', views.index, name='index'),
    
    # ex: /lista/5/
    url(r'^(?P<parroquia_id>[0-9]+)/$', views.detail, name='detail'),
    
    # ex: lista/busqueda/
    url(r'^busqueda/$', views.search, name='search'),
]