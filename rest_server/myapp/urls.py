from django.conf.urls import url, include

from myapp import views

urlpatterns = [
    url(r'^boo/', views.hello, name='hello')
]