from django import forms

class YourForm(forms.Form):
    image = forms.ImageField()
# forms.py
from django import forms

class FileUploadForm(forms.Form):
    file = forms.FileField()
    file_type = forms.ChoiceField(choices=(('image', 'Image'), ('video', 'Video')))



