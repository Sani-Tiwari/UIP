# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from .models import MyImage, Video
from django.contrib.auth import logout, authenticate, login
from django.http import HttpResponse
from django.http import JsonResponse
from .forms import FileUploadForm

from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
User = get_user_model()
#from django.contrib.auth import get_user_model


from .models import UserProfile

# password for test user is Harry$$$***000
# Create your views here.
def index(request):
    print(request.user)
    if request.user.is_anonymous:
        return redirect("/login") 
    images = MyImage.objects.filter(user=request.user)

    return render(request, 'index.html', {'images': images})

    #return render(request, 'index.html')

def loginUser(request):
    if request.method=="POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        print(username, password)

        # check if user has entered correct credentials
        user = authenticate(username=username, password=password)

        if user is not None:
            # A backend authenticated the credentials
            login(request, user)
            return redirect("/")

        else:
            # No backend authenticated the credentials
            return render(request, 'login.html')

    return render(request, 'login.html')

def logoutUser(request):
    logout(request)
    return redirect("/login")
def signup_user(request):
    if request.method=='POST':
        uname=request.POST.get('username')
        email=request.POST.get('email')
        pass1=request.POST.get('psw')
        pass2=request.POST.get('psw-repeat')
        
        my_user= User.objects.create_user(uname,email,pass1)
        my_user.save()
        return redirect("/login")
    return render(request,'sign.html')
#@login_required
#def im(request):
#    images = MyImage.objects.filter(user=request.user)

#    return render(request, 'img.html', {'images': images})
#Creating demo
@login_required
@login_required
def im(request):
    if request.method == 'POST':
        file = request.FILES.get('file')
        file_extension = file.name.split('.')[-1].lower()

        if file_extension in ['mp4', 'avi', 'mov']:
            # Save the file as a video
            video = Video(video_file=file, user=request.user)
            video.save()
        elif file_extension in ['jpg', 'jpeg', 'png', 'gif']:
            # Save the file as an image
            image = MyImage(image_file=file, user=request.user)
            image.save()

    file_type = request.GET.get('file_type', 'image')
    images = []
    videos = []

    if file_type == 'image':
        images = MyImage.objects.filter(user=request.user)
    elif file_type == 'video':
        videos = Video.objects.filter(user=request.user)

    return render(request, 'img.html', {'images': images, 'videos': videos, 'file_type': file_type})
#def im(request):
 #   file_type = request.GET.get('file_type', 'image')
#    images = []
 #   videos = []

 #   if file_type == 'image':
#        images = MyImage.objects.filter(user=request.user)
#    elif file_type == 'video':
#        user_profile = UserProfile.objects.get(user=request.user)
#        videos = Video.objects.filter(user=user_profile)

 #   return render(request, 'img.html', {'images': images, 'videos': videos, 'file_type': file_type})

@login_required
#def upload_image(request):
 #   if request.method == 'POST':
  #      form = YourForm(request.POST, request.FILES)
   #     if form.is_valid():
    ##        image = form.cleaned_data['image']
      #      my_image = MyImage(image=image, user=request.user)  # Create a model instance with the associated user
      #      my_image.save()  # Save the model instance
      #      return render(request, 'success.html')
    #else:
    #    form = YourForm()
    #return render(request, 'upload.html', {'form': form})
    # 
#def upload_image(request):
    #if request.method == 'POST':
    #    image = request.FILES['image']
    #    MyImage.objects.create(user=request.user, image=image)
    #    return redirect('im')
    #return render(request, 'upload.html')

#Create new upload_image




#from .models import Video, MyImage
def upload_image(request):
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            file_type = form.cleaned_data['file_type']
            file = form.cleaned_data['file']
            user = request.user

            if file_type == 'image':
                MyImage.objects.create(image_file=file, user=user)
            elif file_type == 'video':
                Video.objects.create(video_file=file, user=user)
    else:
        form = FileUploadForm()

    images = MyImage.objects.filter(user=request.user)
    videos = Video.objects.filter(user=request.user)

    context = {
        'form': form,
        'images': images,
        'videos': videos,
    }

    return render(request, 'upload.html', context)
#def upload_image(request):
#    print('working')
#    if request.method == 'POST':
#        file = request.FILES.get('file')
#        file_extension = file.name.split('.')[-1].lower()

#        if file_extension in ['mp4', 'avi', 'mov']:
            # Save the file as a video
#            video = Video(video_file=file, user=request.user)
#            video.save()
#            return HttpResponse('Video uploaded successfully!')
#        elif file_extension in ['jpg', 'jpeg', 'png', 'gif']:
            # Save the file as an image
#            image = MyImage(image_file=file, user=request.user)
#            image.save()
#            return HttpResponse('Image uploaded successfully!')

#    return render(request, 'upload.html')
#    if request.method == 'POST':
#        file = request.FILES['file']
#        file_type = request.POST['file_type']
        
        # Retrieve or create the UserProfile instance for the current user
#        user_profile, _ = UserProfile.objects.get_or_create(user=request.user)
        
 #       if file_type == 'image':
 #           MyImage.objects.create(user=user_profile, image=file)
 #       elif file_type == 'video':
 #           Video.objects.create(user=user_profile, video_file=file)
        
 #       return redirect('im')
    
  #  return render(request, 'upload.html')

def forget(request):
    return render(request, 'forget.html')

#Creating new view
def bulk (request):
    return render(request, 'bulk.html')



