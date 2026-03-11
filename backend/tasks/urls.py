from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('tasks/', views.getAllTasks, name='getAllTasks'),
    path('tasks/create/', views.createTask, name='createTask'),
    path('tasks/delete/<int:id>/', views.deleteTask, name='deleteTask'),
]

