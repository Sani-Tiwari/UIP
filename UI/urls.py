from django.contrib import admin
from django.urls import path, include
from UI import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [ 
    path('',views.index, name="home"),
    path('login',views.loginUser, name="login"),
    path('logout',views.logoutUser, name="logout"),
    path('signup',views.signup_user, name="signup"),
    path('up',views.upload_image, name="upload"),
    path('forget',views.forget, name="forget"),
    path('bulk',views.bulk, name="bulk"),
    path('imge',views.im, name="im"),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
